<?php

namespace App\Http\Controllers;

use App\Product;

use Illuminate\Http\Request;

class VoteController extends Controller
{
    function prodDump () {
        $products = Product::all();
        dd($products); 
    }
}
