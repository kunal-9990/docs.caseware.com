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

//allow unauthenticated users to cast a max of 10 votes per minute
Route::middleware('throttle:30|180,1')->group(function () {        
        Route::post('/api/vote/create', 'VoteController@createVote');
        Route::post('/api/vote/updateVoteState', 'VoteController@updateVoteState');
});

Route::get('/api/vote/getData', 'VoteController@getVoteData');

// home page - to come

// TEMPORARY HARD CODE

Route::get('/{region}/{lang}/{product}/{version}/webapps', function() {
        return redirect('/ca/en/csh');
});

Route::group(['middleware' => 'setregion'], function () {

        Route::get('/{region}/{lang}/videos', 'PageController@videosOverview');
        Route::get('/{region}/{lang}/videos/{slug}', 'PageController@videosLightbox');
        Route::get('/blog', 'PageController@blogOverview');
        Route::get('/blog/{post}', 'PageController@blogDetail');
        Route::get('/{region}/{lang}/csh', 'PageController@csh');
        Route::get('/{region}/{lang}/faq', 'PageController@faq');

        Route::get('/{region}/{lang}/{slug}', 'PageController@product');
        Route::get('/{region}/{lang}/', 'PageController@home');

        Route::get('/', function() {
                return redirect('/ca/en');
        });

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
Route::get('/{region}/{lang}/{product}/{version}/{category}/{subcategory}/{topic}', 'PageController@showTopic')->name('topic');

// topics
Route::get('/{region}/{lang}/{product}/{version}/{category}/{subcategory}/{subsubcategory}/{topic}', 'PageController@showTopic2');

// sub category
Route::get('/{region}/{lang}/{product}/{version}/{category}/{subcategory}', 'PageController@showSubCategory');

// category
Route::get('/{region}/{lang}/{product}/{version}/{category}', 'PageController@showCategory')->name('category');


Route::post('logemail', 'Controller@logEmail');