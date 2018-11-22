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

//------temporary redirects----- 

Route::get('/2018/webapps/28/en/Resources/Project Files/CaseWareCloud/References/Tools-for-importing-client-data.htm', function () {
    return redirect('/2018/webapps/28/en/Engagements/File-Preparation/Import-clients-financial-data-to-an-engagement-file.htm#Importing-from-third-party-desktop-accounting-software');
});
//------------------------------

// cloud index
Route::get('/', function () {
    return redirect('/2018/webapps/29/en/webapps');
});

// search
Route::get('/{year}/{product}/{version}/{lang}/search', 'PageController@search')->name('search');

// topics
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{topic}', 'PageController@showTopic')->name('topic');

// topics
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}/{subsubcategory}/{topic}', 'PageController@showTopic2');

// sub category
Route::get('/{year}/{product}/{version}/{lang}/{category}/{subcategory}', 'PageController@showSubCategory');

// category
Route::get('/{year}/{product}/{version}/{lang}/{category}', 'PageController@showCategory')->name('category');

Route::post('logemail', 'Controller@logEmail');





