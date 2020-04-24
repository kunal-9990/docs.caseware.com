<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    //
    protected $fillable = ['prod_id', 'feat_id', 'vote_state'];

}
