<?php

namespace App\Http\Middleware;

use Closure;
use Unirest\Request as Unirest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

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

            $response = Cache::rememberForever("ipstackDetectedRegion", function() use ($method, $ip) {
                //If not send the request
                $response = Unirest::get($method);

                //added logging for ipstack call
                Log::info('Ipstack called from CheckRegionQuery middleware and IP is: '.$ip);

                return $response;
            });
            

            $requestRegion = isset($response->body->country_code) ? strtolower($response->body->country_code) : 'ca';
            if ($requestRegion !== 'ca' && $requestRegion !== 'us') {
                $requestRegion = 'int';
            }
            return redirect($request->path().'?region='.$requestRegion);
        }

        return $next($request);
    }
}
