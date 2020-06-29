<?php

namespace App\Http\Middleware;

use Closure;
use Unirest\Request as Unirest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;



class setRegion
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
        $regionCookieSet = (is_null(Cookie::get('region'))) ? false : true;
        if(!$regionCookieSet) {
            $ip = $request->ip();
            $ip = '66.207.217.22';
            
            $method = 'https://api.ipstack.com/'.$ip.'?access_key='.env("IP_STACK_KEY");
            $response = Unirest::get($method);
            $regionSlug = $request->segments()[0].'/';
            $requestRegion = strtolower($response->body->country_code).'/';
            Cookie::queue('region', strtolower($response->body->country_code), 60*24*365);

            return redirect(str_replace($regionSlug, $requestRegion, $request->path()));
   
            
        }

        return $next($request);
    }
}
