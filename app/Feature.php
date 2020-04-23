<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = ['feat_id', 'prod_id', 'feat_prod_ver', 'feat_name', 'feat_desc'];

    public static function getId($featName){
        $featId = Feature::where('feat_name', $featName)->get(['feat_id']);
        return $featId;
    }
}
