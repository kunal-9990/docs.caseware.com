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
    function home($region, $lang){

        // App::setLocale($lang);

        $page = $this->cms->page($region, $lang, 'home');
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{        
            $pageContent = $page['results'][0];
            return view('pages.landing', compact('pageContent', 'recent', 'exclusiveTo','title' ));
        }
    }

    function product($region, $lang, $productSlug){
        // App::setLocale($lang);

        $page = $this->cms->page($region, $lang, $productSlug);
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{        
            $pageContent = $page['results'][0];
            // // TODO - update
            // if(startsWith(strtolower($product), "product")){
            //     $page = $this->cms->page(removeFileExt(strtolower($product)));
            //     $pageContent = $page['results'][0];
            //     // dd($pageContent);
            //     return view('pages.landing', compact('pageContent', 'recent', 'exclusiveTo','title'));
            // }

            return view('pages.landing', compact('pageContent', 'recent', 'exclusiveTo','title'));
            }
    }

    
    // Blog Overview
    function blogOverview(){

        // App::setLocale($lang);
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{        
            $page = $this->cms->page('blog');
            $pageContent = $page['results'][0];
            $posts = $this->cms->posts();
            $categories = $this->cms->categories();
            $tags = $this->cms->tags();
            return view('pages.blog-overview', compact('pageContent', 'posts', 'tags', 'categories', 'recent', 'exclusiveTo','title' ));
        }
    }

    // Blog Detail
    function blogDetail($post){

        // App::setLocale($lang);
        
        $postContent = $this->cms->post('en', $post)['results'][0]; // TODO - remove hardcode english... if post doesnt exist show 404
        $posts = $this->cms->posts();
        $categories = $this->cms->categories();
        $tags = $this->cms->tags();

        return view('pages.blog-detail', compact('postContent', 'posts', 'tags', 'categories', 'recent', 'exclusiveTo','title' ));
    }

    // TEMP - CSH
    function csh($region, $lang){
        // App::setLocale($lang);
        $page = $this->cms->page($region, $lang, 'context-sensitive-help');
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{        
            $pageContent = $page['results'][0];
            return view('pages.csh', compact('pageContent', 'recent', 'exclusiveTo','title'));
        }
    }


    // TEMP - FAQ
    function faq($region, $lang){
        $page =$this->cms->page($region, $lang, 'faqs');
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{
            $pageContent = $page['results'][0];
            return view('pages.faq', compact('pageContent', 'recent', 'exclusiveTo','title'));
        }
    }

    // TEMP - Videos overview
    function videosOverview(){
        // App::setLocale($lang);
        $page = $this->cms->page('videos');
        if(empty($page['results'])){
            return response()->view('errors.404');
        }
        else{
            $pageContent = $page['results'][0];
            $videos = $this->cms->get_custom_post_by_type('videos');
            $categories = $this->cms->categories();
            $tags = $this->cms->tags();
            return view('pages.videos', compact('pageContent', 'videos', 'categories', 'tags', 'title'));
        }
    }

    // TEMP - Videos lightbox - same as overview but sends slug details to overview page 
    function videosLightbox($slug){
        // App::setLocale($lang);
        $page = $this->cms->page('videos');
        $pageContent = $page['results'][0];
        $videos = $this->cms->get_custom_post_by_type('videos');
        $categories = $this->cms->categories();
        $tags = $this->cms->tags();
        return view('pages.videos', compact('slug', 'pageContent', 'videos', 'categories', 'tags', 'title'));
    }


    // search
    function search($year, $product, $version, $lang){
        return view('pages.search', compact('recent'));
    }
    
    // topic
    function showTopic($region, $lang, $product, $version, $category, $subcategory, $topic){

        App::setLocale($lang);
        
        //first check if the topic is a what's new page. 
        //if so - get the content from the cms and return What's New template
        //assume the cms permalink for all WN pages is: "whats-new-product-version"
        if(startsWith(strtolower($topic), "whats-new")){
            $page = $this->cms->page(removeFileExt(strtolower($topic)));

            //if the slug is not present in the cms, try displaying the flare-based WN page:
            if(!$page["totalPages"]){
                if(!endsWith($topic,".htm")){
                    $topic .= ".htm";
                } 

                // otherwise, get topic content from flare build.
                $noHeader = true;
                $product =  strtolower($product);

                try {
                    $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/"."Content/".$category."/".$subcategory."/".$topic ));
                    $doNotTranslate = true;
                } catch (Exception $e) {
                    try {
                        $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/en/".$product."/".$version."/"."Content/".$category."/".$subcategory."/".$topic ));
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

            $pageContent = $page['results'][0];
            $voteData = getVoteData($pageContent->acf->product, $pageContent->acf->version);
            $userVotes = session('user.Votes');

            $topicVersion = substr($topic, strrpos($topic, '-') + 1);

            return view('pages.whats-new', compact('pageContent', 'recent', 'exclusiveTo','title', 'voteData', 'userVotes', 'product', 'version'));
        }

        if(!endsWith($topic,".htm")){
            $topic .= ".htm";
        } 

        // otherwise, get topic content from flare build.
        $noHeader = true;
        $product =  strtolower($product);

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/Content/".$category."/".$subcategory."/".$topic ));
            $doNotTranslate = true;
        } catch (Exception $e) {
            try {
                $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/en/".$version."/"."Content/".$category."/".$subcategory."/".$topic ));
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
    function showTopic2($region, $lang, $product, $version, $category, $subcategory, $subsubcategory, $topic){

        App::setLocale($lang);
                
        if(!endsWith($topic,".htm")){
            $topic .= ".htm";
        }

        $product =  strtolower($product);

        if($subcategory == "TranslatedDocs"){
            $doNotTranslate = true;
        }

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/"."Content/".$category."/".$subcategory."/".$subsubcategory."/".$topic ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/en/".$product."/".$version."/"."Content/".$category."/".$subcategory."/".$subsubcategory."/".$topic ));
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
    function showSubCategory($region, $lang, $product, $version, $category, $subcategory){

        App::setLocale($lang);
                

        if(!endsWith($subcategory,".htm")){
            $subcategory .= ".htm";
        }

        $product =  strtolower($product);

        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/"."Content/".$category."/".$subcategory ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents( env('PATH_TO_PUBLIC').'documentation_files/'.$region."/en/".$product."/".$version."/"."Content/".$category."/".$subcategory ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }          

        $maincontentarea = $dom->find('body', 0);
        $recent = getRecentlyViewed();
        return view('pages.documentation', compact('maincontentarea', 'recent'));
    }
    
    // category
    function showCategory($region, $lang, $product, $version, $category){

        App::setLocale($lang);
        
        if(!endsWith($category,".htm")){
            $category .= ".htm";
        }

        $product =  strtolower($product);
        $path = env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/Content/".$category ;
        // dd($path);
        try {
            $dom = HtmlDomParser::str_get_html(file_get_contents(env('PATH_TO_PUBLIC').'documentation_files/'.$region."/".$lang."/".$product."/".$version."/Content/".$category ));
            $doNotTranslate = true;        
        } catch (Exception $e) {
            try {
            $dom = HtmlDomParser::str_get_html(file_get_contents(env('PATH_TO_PUBLIC').'documentation_files/'.$region."/en/".$product."/".$version."/Content/".$category ));
                } catch (Exception $e) {
                    return response()->view('errors.404');
                }
        }          

        $maincontentarea = $dom->find('body', 0);
        $recent = getRecentlyViewed();
        return view('pages.one-column', compact('maincontentarea', 'recent'));
    }


}
