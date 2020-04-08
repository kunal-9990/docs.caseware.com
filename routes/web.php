<?php



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
$current_version = env("CURRENT_VERSION");


Route::get('/postDump', 'PageController@postDump');

// cloud index
Route::get('/', function () {
    return redirect('/2019/webapps/30/en/webapps');
});


// search
Route::get('/search/{year}/{product}/{version}/{lang}/search', 'PageController@search')->name('search');

// se-search
Route::get('/se-search/{year}/{product}/{version}/{lang}/search', 'PageController@search')->name('se-search');

// search redirect
Route::get('/search/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{topic}', function($year, $product, $version, $lang, $category, $subcategory, $topic){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory.'/'.$topic);
});
// search redirect
Route::get('/search/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{subsubcategory}/{topic}', function($year, $product, $version, $lang, $category, $subcategory, $subsubcategory, $topic){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory.'/'.$subsubcategory.'/'.$topic);
});
// search redirect
Route::get('/search/{year}/{product}/{version}/{lang}/{category}', function($year, $product, $version, $lang, $category){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category);
});
// search redirect
Route::get('/search/{year}/{product}/{version}/{lang}/{category}/{subcategory}', function($year, $product, $version, $lang, $category, $subcategory){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory);
});
// search redirect
Route::get('/se-search/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{topic}', function($year, $product, $version, $lang, $category, $subcategory, $topic){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory.'/'.$topic);
});
// search redirect
Route::get('/se-search/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{subsubcategory}/{topic}', function($year, $product, $version, $lang, $category, $subcategory, $subsubcategory, $topic){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory.'/'.$subsubcategory.'/'.$topic);
});
// search redirect
Route::get('/se-search/{year}/{product}/{version}/{lang}/{category}', function($year, $product, $version, $lang, $category){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category);
});
// search redirect
Route::get('/se-search/{year}/{product}/{version}/{lang}/{category}/{subcategory}', function($year, $product, $version, $lang, $category, $subcategory){
        return redirect('/'.$year.'/'.$product.'/'.$version.'/'.$lang.'/'.$category.'/'.$subcategory);
});





// topics
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{topic}', 'PageController@showTopic')->name('topic');

// topics
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{subsubcategory}/{topic}', 'PageController@showTopic2');

// sub category
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}', 'PageController@showSubCategory');

// category
Route::get('/{year}/{product}/{version}/{lang}/{category}', 'PageController@showCategory')->name('category');


Route::post('logemail', 'Controller@logEmail');





