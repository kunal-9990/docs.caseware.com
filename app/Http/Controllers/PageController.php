<?php
// comment
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
    function showTopic($product, $version, $lang, $category, $subcategory, $topic){

        if(!endsWith($topic,".htm")){
            $topic .= ".htm";
        }
        // dd($version);
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'documentation_files/'.$product."/".$version."/"."/Content/".$category."/".$subcategory."/".$topic );

        $maincontentarea = $dom->find('body', 0);

        return view('pages.documentation', compact('maincontentarea'));
    }

    // subcategory
    function showSubCategory($product, $version, $lang, $category, $subcategory){

        if(!endsWith($subcategory,".htm")){
            $subcategory .= ".htm";
        }

        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'documentation_files/'.$product."/".$version."/"."/Content/".$category."/".$subcategory );

        $maincontentarea = $dom->find('body', 0);

        return view('pages.documentation', compact('maincontentarea')); 
    }
    
    // category
    function showCategory($product, $version, $lang, $category){

        if(!endsWith($category,".htm")){
            $category .= ".htm";
        }
        
        $dom = HtmlDomParser::file_get_html( env('PATH_TO_PUBLIC').'documentation_files/'.$product."/".$version."/"."/Content/".$category );

        $maincontentarea = $dom->find('body', 0);

        return view('pages.documentation', compact('maincontentarea'));
    }
}
