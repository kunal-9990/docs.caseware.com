<?php

namespace App\Http\Controllers;
use Request;
use App\Vote;
use App\Feature;
use App\Product;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log; 
use Illuminate\Support\Facades\Cookie;

class VoteController extends Controller
{

    function dumpVotes() {
        $votes = Vote::all();
        dd($votes);
    }

    function createVote (Request $request) {

        //get product id using name
        $prodName = $request->input('product');
        $prodVer = $request->input('version');
        $featName = $request->input('feature');
        $featDesc = $request->input('featureDesc');
        $voteType = $request->input('voteType');
        

        $prodId = Product::getId($prodName);
        if ($prodId->isEmpty()){
            //create record for undefined product
            $prodData = array(
                'prod_name' => $prodName,
                'prod_current_ver' => $prodVer,
                'prod_wn_url' => $request->fullUrl(),
            );
            $newProd = Product::create($prodData);

            try {
                $prodId = Product::getId($prodName)[0]->prod_id;
            } catch(Exception $e){
                Log::error("upVote for undefined product: ".$prodName);
                return;
            }
        }
        else{
            $prodId = $prodId[0]->prod_id;
        }

        //get feature id using name
        $featId = Feature::getId($featName, $prodId, $prodVer);
        if ($featId->isEmpty()){
            //create record for undefined feature
            $featData = array(
                'prod_id' => $prodId,
                'feat_prod_ver' => $prodVer,
                'feat_name' => $featName,
                'feat_desc' => $featDesc,
            );
            $newfeat = Feature::create($featData);

            try {
                $featId = Feature::getId($featName, $prodId, $prodVer)[0]->feat_id;
            } catch(Exception $e){
                Log::error("upVote for undefined feature: ".$featName);
                return;
            }
        }
        else{
            $featId = $featId[0]->feat_id;
        }
        
        //create vote
        $voteData = array(
            'prod_id' => $prodId, 
            'feat_id' => $featId, 
            'vote_state' => $voteType
        );
        try {
            Vote::create($voteData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    function updateVoteState(Request $request) {
        $prodName = $request->input('product');
        $prodVer = $request->input('version');
        $featureId = $request->input('featureId');
        $featureName = $request->input('featureName');
        $prodId = Product::getId($prodName)[0]->prod_id;
        $voteElementState = $request->input('voteElementState');
        // Log::info("prod ver:".$prodVer);
        // Log::info("prod id:".$prodId);
        // Log::info("updateVoteState:".empty($featureId));
        // Log::info("updateVoteState:".$featureId.$featureName.$voteElementState);
        if(empty($featureId)){
            Log::info("feat nam:".$featureName);
            Log::info("prod ver:".$prodVer);
            Log::info("prod id:".$prodId);
            $feature = Feature::getId($featureName, $prodId, $prodVer);
            $featureId = $feature[0]->feat_id;


            Log::info("feature id:".$featureId);
            Log::info(var_dump($featureId));
        }
        
        // $request->session()->push('user.Votes', [$featureId => $voteElementState]);
        // $userVotes = $request->session()->get('user.Votes');
        $userVotes =  Request::cookie('user.Votes');;
        if($voteElementState == 1) {
            $userVotes[$featureId] = 'up';
        }
        elseif($voteElementState == 2) {
            $userVotes[$featureId] = 'down';
        }
        else{
            $userVotes[$featureId] = 'neutral';
        }
        // $request->session()->put('user.Votes', $userVotes);
        Cookie::queue('user.Votes', $userVotes, 60*24*365);


        // if(array_key_exists($featureId, $userVotes)){
        //     $userVotes[$featureId] = $voteElementState;
        // }
        // else{
        // }

        // //get session data containing all got votes states of each feature
        // $userVotes = $request->session()->get('userVotes');
        // //if it doesn't exist, create it with new entry
        // if(!isset($userVotes)){
        //     $newUserVotesArr = array($featureId => $voteElementState);
        //     $request->session()->put('userVotes', $newUserVotesarr);
        // }
        // //otherwise, update/add entry
        // else {
        //     $uservotes[$featureId] = $voteElementState;
        //     $request->session()->put('userVotes', $newUserVotesarr);

        // }
    }

 
}
