<?php

namespace App\Http\Controllers;

use App\Vote;
use App\Feature;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class VoteController extends Controller
{

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
                $prodId = Product::getId($prodName)[0]->prod_id;;
            } catch(Exception $e){
                Log::error("upVote for undefined product: ".$prodName);
                return;
            }
        }
        else{
            $prodId = $prodId[0]->prod_id;
        }

        //get feature id using name
        $featId = Feature::getId($featName);
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
                $featId = Feature::getId($featName)[0]->feat_id;;
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

    function getVoteData(Request $request) {
        $version = $request->input('version'); 

        $versionVotes = DB::table('votes')
            ->join('features', 'votes.feat_id', '=', 'features.feat_id')
            ->where('feat_prod_ver', $version)
            ->get(['features.feat_id', 'feat_name', 'vote_state']);


        $featureScores = array();

        foreach($versionVotes as $versionVote) {
            if(!array_key_exists($versionVote->feat_name, $featureScores)){
               $featureScores[$versionVote->feat_name] = 0;
            }
            if($versionVote->vote_state = 1 || $versionVote->vote_state = 4){
                $featureScores[$versionVote->feat_name]++;
            }
            elseif($versionVote->vote_state = 2 || $versionVote->vote_state = 3){
                 $featureScores[$versionVote->feat_name]--;
            } 
        }
        $jsonScores = json_encode($featureScores);

        return $jsonScores;
    }
}
