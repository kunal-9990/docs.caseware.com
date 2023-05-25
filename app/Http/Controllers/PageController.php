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

        $page = $this->cms->get_custom_post_by_name($lang, 'home', $region);
        
        
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else{        
            $page = $this->getPlaylists($page);
            $page = $this->getDownloads($page);
            $page = $this->getProductNavigation($page);
            $pageContent = $page['results'][0];
            return view('pages.landing', compact('pageContent', 'recent', 'exclusiveTo','title', 'playlists', 'region' ));
        }
    }

    function product($region, $lang, $productSlug){
        // App::setLocale($lang);

        $page = $this->cms->get_custom_post_by_name($lang, 'product', "{$region}-{$productSlug}");
        
        
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else {        
            $page = $this->getPlaylists($page);
            $page = $this->getDownloads($page);
            $pageContent = $page['results'][0];
            return view('pages.landing', compact('pageContent', 'recent', 'exclusiveTo','title', 'playlists', 'region'));
        }
    }

    
    // Blog Overview
    function blogOverview(){
        $page = $this->cms->page('int', 'en', 'blog');
        // App::setLocale($lang);
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else{        
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

    function csh($region, $lang, $slug){


        $page = $this->cms->get_custom_post_by_name($lang, 'csh', "{$region}-{$slug}");
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else{        
            $pageContent = $page['results'][0];
            return view('pages.csh', compact('pageContent', 'recent', 'exclusiveTo','title', 'region'));
        }
    }


    // TEMP - FAQ
    function faq($region, $lang, $slug){
        $page = $this->cms->get_custom_post_by_name($lang, 'faq', "{$region}-{$slug}");
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else{
            $pageContent = $page['results'][0];
            return view('pages.faq', compact('pageContent', 'recent', 'exclusiveTo','title', 'region'));
        }
    }

    // TEMP - Videos overview 
    

    
    function videosOverview($region, $lang, $slug = null){
        $page = $this->cms->page($region, $lang, 'videos');
        if(empty($page['results'])){
            return response()->view('errors.languageunavailable');
        }
        else{
            $pageContent = $page['results'][0];
            $videos = $this->cms->get_custom_post_by_type('videos');
            $categories = $this->cms->categories();
            $tags = $this->cms->tags();
            return view('pages.videos', compact('slug', 'pageContent', 'videos', 'categories', 'tags', 'title', 'playlists'));
        }
        $page = $this->getPlaylists($page);
    }
    
 
    
    // search
    function search($year, $product, $version, $lang){
        return view('pages.search', compact('recent'));
    }
    
    // topic
    function showTopic($year, $product, $version, $lang, $category, $subcategory, $topic){

        App::setLocale($lang);

        // check if the topic is CaseWare-Cloud-Privacy-Policy.htm
        // If yes, redirect it to caseware.com privacy statement page
        if($topic == "CaseWare-Cloud-Privacy-Policy.htm") {
            return redirect('https://www.caseware.com/privacy-statement', 301);
        }
        
        // check if the topic is CaseWare-Cloud-Terms-of-Use.htm
        // If yes, redirect it to CaseWare-Cloud-Services-Agreement page
        if($topic == "CaseWare-Cloud-Terms-of-Use.htm") {
            return redirect('/latest/webapps/'.$lang.'/Setup/Licenses/CaseWare-Cloud-Services-Agreement.htm', 301);
        }

        //as a result of product rename
        // check for ReviewCompTax URLs and redirect it to ReviewComp
        if($category == "Explore" && $subcategory == "CaseWare-ReviewCompTax") {            
            $redirectURL = '/2020/webapps/31/'.$lang.'/'.$category.'/Caseware-ReviewComp';

            if($topic == 'RCT-Index.htm' || $topic == 'RCT-Index'){
                $redirectURL .= '/ReviewComp-Index.htm';
            }
            else if($topic == 'Start-a-CaseWare-RCT-engagement.htm'){
                $redirectURL .= '/Start-a-Caseware-ReviewComp-engagement.htm';
            }
            else if($topic == 'Edit-the-CaseWare-RCT-engagement-letter.htm'){
                $redirectURL .= '/Edit-the-Caseware-ReviewComp-engagement-letter.htm';
            }
            else if($topic == 'Plan-your-CaseWare-RCT-engagement.htm'){
                $redirectURL .= '/Plan-your-Caseware-ReviewComp-engagement.htm';
            }
            else if($topic == 'Transfer-data-from-Working-Papers-to-CaseWare-RCT.htm'){
                $redirectURL .= '/Transfer-data-from-Working-Papers-to-Caseware-ReviewComp.htm';
            }
            else if($topic == 'Perform-fieldwork-in-a-CaseWare-RCT-engagement.htm'){
                $redirectURL .= '/Perform-fieldwork-in-a-Caseware-ReviewComp-engagement.htm';
            }
            else if($topic == 'Conclude-your-CaseWare-RCT-engagement.htm'){
                $redirectURL .= '/Conclude-your-Caseware-ReviewComp-engagement.htm';
            }
            else {
                $redirectURL .= '/'.$topic;
            }
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Cloud-Apps' && $topic == 'CaseWare-RCT.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Cloud-Apps/Caseware-ReviewComp.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Whats-new-CaseWare-RCT.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Whats-new-Caseware-ReviewComp.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Summer-2022.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Summer-2022.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Winter-2021.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Winter-2021.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Fall-2021.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Fall-2021.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Spring-2021.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Spring-2021.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Winter-2020.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Winter-2020.htm';
            return redirect($redirectURL, 301);
        }     
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Fall-2020.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Fall-2020.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Spring-2020.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Spring-2020.htm';
            return redirect($redirectURL, 301);
        }       
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Winter-2019.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Winter-2019.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Fall-2019.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Fall-2019.htm';
            return redirect($redirectURL, 301);
        }
        if($category == 'Explore' && $subcategory == 'Whats-New' && $topic == 'Release-history-RCT-Summer-2019.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Whats-New/Release-history-ReviewComp-Summer-2019.htm';
            return redirect($redirectURL, 301);
        }       
        if($category == 'Explore' && $subcategory == 'Getting-Started' && $topic == 'Get-started-with-CaseWare-RCT-Firm-Admin.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Getting-Started/Get-started-with-Caseware-ReviewComp-Firm-Admin.htm';
            return redirect($redirectURL, 301);
        }        
        if($category == 'Explore' && $subcategory == 'Getting-Started' && $topic == 'Get-started-with-CaseWare-RCT.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Getting-Started/Get-started-with-Caseware-ReviewComp.htm';
            return redirect($redirectURL, 301);
        } 
        if($category == 'Explore' && $subcategory == 'Getting-Started' && $topic == 'Get-started-with-CaseWare-RCT-Contact.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Explore/Getting-Started/Get-started-with-Caseware-ReviewComp-Contact.htm';
            return redirect($redirectURL, 301);
        }        
        if($category == 'Engagements' && $subcategory == 'File-Preparation' && $topic == 'Import-engagement-data-from-CaseWare-Working-Papers-to-CW-RCT.htm'){
            $redirectURL = '/2020/webapps/31/'.$lang.'/Engagements/File-Preparation/Import-engagement-data-from-Caseware-Working-Papers-to-Caseware-ReviewComp.htm';
            return redirect($redirectURL, 301);
        }

        

        //as a result of product rename from OnPoint Tax -> OnPoint Taxflow
        // check for OnPoint-Tax URLs and redirect it to OnPoint-Taxflow
        if($category == "Explore" && $subcategory == "OnPoint-Tax") {            
            $redirectURL = '/2020/webapps/31/'.$lang.'/'.$category.'/OnPoint-Taxflow';

            if($topic == 'OnPoint-Tax-Index.htm'){
                $redirectURL .= '/OnPoint-Taxflow-Index.htm';
            }
            else if($topic == 'What-is-OnPoint-Tax.htm'){
                $redirectURL .= '/What-is-OnPoint-Taxflow.htm';
            }
            else if($topic == 'Start-the-OnPoint-Tax-engagement.htm'){
                $redirectURL .= '/Start-the-OnPoint-Taxflow-engagement.htm';
            }
            else {
                $redirectURL .= '/'.$topic;
            }
            return redirect($redirectURL, 301);
        }

        
        //first check if the topic is a what's new page. 
        //if so - get the content from the cms and return What's New template
        //assume the cms permalink for all WN pages is: "whats-new-product-version"
        if($subcategory == "Whats-New"){
            $page = $this->cms->get_custom_post_by_name($lang, 'whats-new', str_replace(".htm", "", $topic));

            //if the slug is not present in the cms, try displaying the flare-based WN page:
            if(!$page["totalPages"]){
                if(empty(endsWith($topic,".htm"))){
                    $topic .= ".htm";
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
        if($subsubcategory == "en" || $subsubcategory == "fr" || $subsubcategory == "es"){
            $subsubcategory = strtoupper($subsubcategory);
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
        $title = strip_tags($maincontentarea->find('h1', 0));
        $recent = getRecentlyViewed();
        return view('pages.documentation', compact('maincontentarea', 'recent', 'title'));
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

          
    function getPlaylists($page)
    {   
        $playlists = array();
        foreach($page['results'][0]->acf->modular_template as $template){
            $playlistVids = array();
            if($template->acf_fc_layout == 'playlist'){
                foreach($template->playlist as $video){
                    $videoContent = $this->cms->get_custom_post_by_id(
                        'videos',
                        $video->ID
                    )->get('results');
                    array_push($playlistVids, $videoContent);
                }
                $template->playlist = $playlistVids;
            }

            if($template->acf_fc_layout == 'video_gallery'){

                foreach($template->video_gallery as $video){
                    $videoContent = $this->cms->get_custom_post_by_id(
                        'videos',
                        $video->ID
                    )->get('results');
                    array_push($playlistVids, $videoContent);
                }
                $template->video_gallery = $playlistVids;
            }
        }
        return $page;
    }   

    function getDownloads($page)
    {   
        foreach($page['results'][0]->acf->modular_template as $template){
            $downloads = array();
            if($template->acf_fc_layout == 'downloads'){
                foreach($template->quick_links as $dl){
                    $dlContent = $this->cms->get_custom_post_by_id(
                        'downloads',
                        $dl->ID
                    )->get('results')->acf;
                    array_push($downloads, $dlContent);
                }
                $template->quick_links = $downloads;
            }
        }
        return $page;
    }   

    function getProductNavigation($page)
    {   
        foreach($page['results'][0]->acf->modular_template as $template){
            $productBlocks = array();
            if($template->acf_fc_layout == 'product_navigation'){
                foreach($template->navigation as $pb){
                    $pbContent = $this->cms->get_custom_post_by_id(
                        'product_blocks',
                        $pb->ID
                    )->get('results')->acf;
                    array_push($productBlocks, $pbContent);
                }
                $template->navigation = $productBlocks;
            }
        }
        return $page;
    }   
}