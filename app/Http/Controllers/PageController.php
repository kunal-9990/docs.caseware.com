<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Sunra\PhpSimple\HtmlDomParser;

class PageController extends Controller
{
    // default
    function home() {
        return view('partials.home');
    }

    // documentation home
    function documentationHome() {
        return view('pages.documentation');
    }

    // topic
    function showTopic($lang, $category, $subcategory, $topic){
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'26-clean-output/Content/'.$category."/".$subcategory."/".$topic.".htm" );

        $maincontentarea = $dom->find('body', 0);

        return view('pages.documentation', compact('maincontentarea'));
    }

    // subcategory
    function showSubCategory($lang, $category, $subcategory){
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'26-clean-output/Content/'.$category."/".$subcategory.".htm" );

        $maincontentarea = $dom->find('body', 0);

        return view('pages.documentation', compact('maincontentarea')); 
    }
    
    // category
    function showCategory($lang, $category){
        
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'26-clean-output/Content/'.$category.".htm" );

        $maincontentarea = $dom->find('div[class=maincontentarea]', 0);

        return view('pages.documentation', compact('maincontentarea'));
    }
}
