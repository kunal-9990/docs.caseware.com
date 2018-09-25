<?php
use Illuminate\Support\Facades\Cache;

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}

function getRecentlyViewed(){

    if (!Cache::has('recent')) {
        $recent = array(Request::url());
        Cache::put('recent', $recent, 360);
    }
    else{

        $recent = Cache::get('recent');

        if (in_array(Request::url(), $recent)){
            $result = array_diff($recent, array(Request::url()));
            array_push($result, Request::url());
            Cache::put('recent', $result, 360);
        }

        elseif(count($recent) >= 5){
            array_shift($recent);
            array_push($recent, Request::url());
            Cache::put('recent', $recent, 360);
        }
        else{
            array_push($recent, Request::url());
            Cache::put('recent', $recent, 360);
        }

    }

    $recent = Cache::get('recent');
    return $recent;
}

?>