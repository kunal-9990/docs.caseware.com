<?php
// comment
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Sunra\PhpSimple\HtmlDomParser;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\View;
use App\Services\DocsCmsApi;
use App;

class PageController extends Controller
{

    // home
    function home(){

        // App::setLocale($lang);

        $page = $this->cms->page('home');
        $pageContent = $page['results'][0];

        return view('pages.home', compact('pageContent', 'recent', 'exclusiveTo','title' ));
    }

    // search
    function search($year, $product, $version, $lang){
        return view('pages.search', compact('recent'));

    }
    
    // topic
    function showTopic($year, $product, $version, $lang, $category, $subcategory, $topic){

        App::setLocale($lang);
        
        if(!endsWith($topic,".htm")){
            $topic .= ".htm";
        } 
        
        //first check if the topic is a what's new page. 
        //if so - get the content from the cms and return What's New template
        if(startsWith(strtolower($topic), "whats-new")){
            $page = $this->cms->page(removeFileExt(strtolower($topic)));
            $pageContent = $page['results'][0];
            $voteData = getVoteData($product, $version);
            // dd($pageContent);
            return view('pages.whats-new', compact('pageContent', 'recent', 'exclusiveTo','title', 'voteData'));
        }


        // otherwise, get topic content from flare build.
        $noHeader = true;
        $product =  strtolower($product);

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/".$lang."/".$category."/".$subcategory."/".$topic ));
            $doNotTranslate = true;
        } catch (Exception $e) {
            try {
                $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/en/".$category."/".$subcategory."/".$topic ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }

        $maincontentarea = $dom->find('body', 0);
        $htmlElement = $dom->find('html', 0);
        (isset($htmlElement->attr['data-mc-conditions'])) ? $exclusiveTo = $htmlElement->attr['data-mc-conditions'] : $exclusiveTo = '' ;
        $recent = getRecentlyViewed();
        $title = strip_tags($dom->find('h1', 0));
        
        // TODO - undo comment below
        // return view('pages.whats-new', compact('maincontentarea', 'recent', 'exclusiveTo','title'));
        return view('pages.documentation', compact('maincontentarea', 'recent', 'exclusiveTo','title'));
    }

    // topics with subsubcategory
    function showTopic2($year, $product, $version, $lang, $category, $subcategory, $subsubcategory, $topic){

        App::setLocale($lang);
                
        if(!endsWith($topic,".htm")){
            $topic .= ".htm";
        }

        $product =  strtolower($product);

        if($subcategory == "TranslatedDocs"){
            $doNotTranslate = true;
        }

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/".$lang."/".$category."/".$subcategory."/".$subsubcategory."/".$topic ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/en/".$category."/".$subcategory."/".$subsubcategory."/".$topic ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }        

        $maincontentarea = $dom->find('body', 0);
        (isset($htmlElement->attr['data-mc-conditions'])) ? $exclusiveTo = $htmlElement->attr['data-mc-conditions'] : $exclusiveTo = '' ;
        $recent = getRecentlyViewed();
        $title = strip_tags($dom->find('h1', 0));

        return view('pages.documentation', compact('maincontentarea', 'recent', 'exclusiveTo','title', 'doNotTranslate'));
    }

    // subcategory
    function showSubCategory($year, $product, $version, $lang, $category, $subcategory){

        App::setLocale($lang);
                

        if(!endsWith($subcategory,".htm")){
            $subcategory .= ".htm";
        }

        $product =  strtolower($product);

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/".$lang."/".$category."/".$subcategory ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."Content/en/".$category."/".$subcategory ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }          

        $maincontentarea = $dom->find('body', 0);
        $recent = getRecentlyViewed();
        return view('pages.documentation', compact('maincontentarea', 'recent'));
    }
    
    // category
    function showCategory($year, $product, $version, $lang, $category){

        App::setLocale($lang);
        
        if(!endsWith($category,".htm")){
            $category .= ".htm";
        }

        $product =  strtolower($product);

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents(env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."/Content/".$lang."/".$category ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents(env('PATH_TO_PUBLIC').'documentation_files/'.$year."/".$product."/".$version."/"."/Content/en/".$category ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }          

        $maincontentarea = $dom->find('body', 0);
        $recent = getRecentlyViewed();
        return view('pages.one-column', compact('maincontentarea', 'recent'));
    }


}
