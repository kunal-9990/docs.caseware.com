<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Sunra\PhpSimple\HtmlDomParser;

class PageController extends Controller
{

    function showTopic($lang, $category, $subcategory, $topic){
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'26-clean-output/Content/'.$category."/".$subcategory."/".$topic.".htm" );

        $maincontentarea = $dom->find('div[class=maincontentarea]', 0);

        return view('pages.topic', compact('maincontentarea'));
    }

    function showSubCategory($lang, $category, $subcategory){
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'26-clean-output/Content/'.$category."/".$subcategory.".htm" );

        $maincontentarea = $dom->find('div[class=maincontentarea]', 0);

        return view('pages.topic', compact('maincontentarea'));
    }


}
