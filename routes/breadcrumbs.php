<?php

// Home
Breadcrumbs::register('home', function ($trail) {
    $trail->push('Home', route('home', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"]]));
});

// Home > Product
Breadcrumbs::register('product', function ($trail) {
    $trail->parent('home');
    $trail->push(ucfirst(Route::current()->parameters()["slug"]), route('product', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"], 'product' => Route::current()->parameters()["slug"]]));
});

// Home > Product > FAQ
Breadcrumbs::register('faq', function ($trail) {
    $trail->parent('product');
    $trail->push('Frequently Asked Questions', route('faq', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"], 'product' => Route::current()->parameters()["slug"]]));
});

// Home > Product > CSH
Breadcrumbs::register('csh', function ($trail) {
    $trail->parent('product');
    $trail->push('Context Specific Help', route('csh', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"], 'product' => Route::current()->parameters()["slug"]]));
});

// Home > Blog
Breadcrumbs::register('blog', function ($trail) {
    $trail->parent('home');
    $trail->push('Blog', route('blog', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"]]));
});

// Home > Videos
Breadcrumbs::register('videos', function ($trail) {
    $trail->parent('home');
    $trail->push('Videos', route('videos', ['region' => Route::current()->parameters()["region"], 'lang' => Route::current()->parameters()["lang"]]));
});


// // Home > Blog
// Breadcrumbs::register('blog', function ($trail) {
//     $trail->parent('home');
//     $trail->push('Blog', route('blog'));
// });

// Home > Blog > [Category]
Breadcrumbs::register('category', function ($trail, $category) {
    $trail->parent('blog');
    $trail->push($category->title, route('category', $category->id));
});

// Home > Blog > [Category] > [Post]
Breadcrumbs::register('post', function ($trail, $post) {
    $trail->parent('category', $post->category);
    $trail->push($post->title, route('post', $post->id));
});