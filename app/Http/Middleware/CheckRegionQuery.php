<?php

namespace App\Http\Middleware;

use Closure;
use Unirest\Request as Unirest;

class CheckRegionQuery
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $region = $request->input('region');

        if(($region !== 'ca' && $region !== 'us' && $region !== 'int' && $region !== 'nl') || empty($region) ) {
            $ip = $request->ip();

            if($ip == '127.0.0.1' || $ip == '192.168.207.56'){
                $ip = '66.207.217.22';
            }
            $method = 'http://api.ipstack.com/'.$ip.'?access_key='.env("IP_STACK_KEY");
            $response = Unirest::get($method);
            $requestRegion = isset($response->body->country_code) ? strtolower($response->body->country_code) : 'ca';
            return redirect($request->path().'?region='.$requestRegion);
        }

        return $next($request);
    }
}
