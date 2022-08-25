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


// search
Route::get('/new-search', 'SearchController@searchform');
Route::get('/new-search/{query}', 'SearchController@searchform');

//allow unauthenticated users to cast a max of 10 votes per minute
Route::middleware('throttle:30|180,1')->group(function () {        
        Route::post('/api/vote/create', 'VoteController@createVote');
        Route::post('/api/vote/updateVoteState', 'VoteController@updateVoteState');
});

Route::get('/api/vote/getData', 'VoteController@getVoteData');

//redirect to with apostrophes in the anchor - ISERV-1432
Route::get('/latest/webapps/en/Explore/Whats-New/Whats-new-OnPointAudit.htm#StatementofPartners/MembersEquity', function () {
        return redirect('/latest/webapps/en/Explore/Whats-New/Whats-new-OnPointAudit.htm#StatementofPartners\'/Members\'Equity', 301);
});

Route::group(['middleware' => 'setregion'], function () {

        Route::get('/{region}/{lang}/videos/{slug?}', 'PageController@videosOverview')->name('videos');
        // Route::get('/blog', 'PageController@blogOverview')->name('blogoverview');
        // Route::get('/blog/{post}', 'PageController@blogDetail')->name('blogdetail');
        Route::get('/{region}/{lang}/{slug}/context-specific-help', 'PageController@csh')->name('csh');
        Route::get('/{region}/{lang}/{slug}/frequently-asked-questions', 'PageController@faq')->name('faq');
        Route::get('/{region}/{lang}/{slug}', 'PageController@product')->name('product');
        Route::get('/{region}/{lang}/', 'PageController@home')->name('home');

        Route::get('/', function() {
                return redirect('/ca/en');
        });
});

Route::group(['middleware' => 'checkregionquery'], function () {

        //Flare Content routes
        // topics
        Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{topic}', 'PageController@showTopic')->name('topic');
        
        // topics
        Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{subsubcategory}/{topic}', 'PageController@showTopic2');
        
        // sub category
        Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}', 'PageController@showSubCategory');
        
        // category
        Route::get('/{year}/{product}/{version}/{lang}/{category}', 'PageController@showCategory')->name('category');

});



Route::post('logemail', 'Controller@logEmail');
