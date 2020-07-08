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
        $requestRegion;
        $regionSlug = (!empty($request->segments()[0])) ? $request->segments()[0] : '';
        if(!$regionCookieSet) {

            $ip = $request->ip();
            $ip = '66.207.217.22';
            $method = 'https://api.ipstack.com/'.$ip.'?access_key='.env("IP_STACK_KEY");
            $response = Unirest::get($method);
            $requestRegion = (empty($response->body->country_code)) ? strtolower($response->body->country_code) : 'ca';
            Cookie::queue('region', strtolower($requestRegion), 60*24*365);
            // return redirect(str_replace($regionSlug, $requestRegion, $request->path()));    
        }

        if($regionSlug !== Cookie::get('region')){
            $request->session()->flash('openRegionLightbox', true);
        }
        else{
            $request->session()->flash('openRegionLightbox', false);
        }

        return $next($request);
    }
}
