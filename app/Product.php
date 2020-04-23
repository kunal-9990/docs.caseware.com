<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['prod_id', 'prod_name', 'prod_current_ver', 'prod_wn_url'];

    public static function getId($prodName){
        $prodId = Product::where('prod_name', $prodName)->get(['prod_id']);
        return $prodId; 
    }
}
