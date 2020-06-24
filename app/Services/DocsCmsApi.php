<?php

namespace App\Services;

use Unirest;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Cache;

class DocsCmsApi
{
    protected $client;

    /**
     * config the APi class
     * @param array $config configuration variables
     */
     public function __construct()
     {
         $this->client = new Unirest\Request;
         $this->endpoint = env('WORDPRESS_API_ENDPOINT');
         $this->lifetime = env('WORDPRESS_API_CACHE_LIFETIME');
     }

     public function pages($page=1, $lifetime = null)
     {
        return $this->_get('/wp-json/wp/v2/pages?_embed', [
            '_embed' => 1,
            'page' => $page
        ], $lifetime);
     }

     public function posts($page=1, $lifetime = null)
     {
        return $this->_get('/wp-json/wp/v2/posts', [
            '_embed' => 1,
            'page' => $page
        ], $lifetime);
     }

     public function all_posts($lifetime = null)
     {
         return $this->_get('/wp-json/wp/v2/posts', [
            '_embed' => 1,
            'per_page' => 100
        ], $lifetime);
     }

     public function tags($lifetime = null)
     {
         return $this->_get('/wp-json/wp/v2/tags', [], $lifetime);
     }

    /**
     * Get posts based on category
     * @param integer $category Wordpress category ID
     */
    public function posts_by_category($category, $page =1, $lifetime = null) {
        return $this->_get('/wp-json/wp/v2/posts', [
            'categories' => $category,
            'page' => $page,
            '_embed' => 1,
        ], $lifetime);
    }

    public function all_posts_by_category($category, $lifetime = null) {
        return $this->_get('/wp-json/wp/v2/posts', [
            'categories' => $category,
            'per_page' => 100,
            '_embed' => 1,
        ], $lifetime);
    }
     public function distributor($locale, $slug, $lifetime = null)
     {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/distributor?slug='. $slug, [
            '_embed' => 1
        ], $lifetime);
     }
    //  public function page($locale, $slug, $lifetime = null)
    //  {
    //     $prepend = getWpLang($locale, request()->session()->get('lang'));

    //     return $this->_get($prepend . '/wp-json/wp/v2/pages?slug='. $slug, [
    //         '_embed' => 1
    //     ], $lifetime);
    //  }
     public function page($region, $lang, $slug, $lifetime = null)
     {
        if($lang == "en"){
            $lang = "";
        }
        return $this->_get('/'.$lang.'/wp-json/wp/v2/pages?slug='.$region.'-'.$slug, [
            '_embed' => 1
        ], $lifetime);
     }

     // TODO - FIX
     public function post($locale, $slug, $lifetime = null)
     {
        // $prepend = getWpLang($locale, request()->session()->get('lang'));
        $prepend = '';
        return $this->_get($prepend . '/wp-json/wp/v2/posts?slug='. $slug, [
            '_embed' => 1
        ], $lifetime);
     }

     public function posts_by_tag($locale, $tag, $lifetime = null)
     {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get('/wp-json/wp/v2/posts?tags=' . $tag, [
            '_embed' => 1,
        ], $lifetime);
     }

     public function get_category_by_id(int $id, $lifetime = null) {
         return $this->_get('/wp-json/wp/v2/categories/' . $id, [], $lifetime);
     }

     public function categories($lifetime = null)
     {
         return $this->_get('/wp-json/wp/v2/categories', [], $lifetime);
     }

     public function category_by_slug($slug, $lifetime = null) {
         return $this->_get('/wp-json/wp/v2/categories', [
             'slug' => $slug
         ], $lifetime);
     }

     // TEMP???
     public function get_custom_post_by_type($post_type, $lifetime = null)
     {
        return $this->_get('/wp-json/wp/v2/' . $post_type, [], $lifetime);
     }

     public function get_custom_post_by_name($locale, $post_type, $post_name, $lifetime = null)
     {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/' . $post_type . '?slug=' . $post_name . '&_embed', [], $lifetime);
     }


    public function people($locale, $page=1, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/our-people', [
            '_embed' => 1,
            'page' => $page
        ], $lifetime);
    }

    public function textblock($slug, $lifetime = null) {
        return $this->_get('/wp-json/ifour/v1/text-blocks/' . $slug, [], $lifetime);
    }

    public function menu($slug, $lifetime = null) {
        return $this->_get('/wp-json/menus/v1/menus/' . $slug, [], $lifetime);
    }

    public function products($locale, $lifetime = null) {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

          return $this->_get($prepend . '/wp-json/wp/v2/product-info', [], $lifetime);
    }

    public function solution($locale, $slug, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/solutions?slug=' . $slug, [
            '_embed' => 1
        ], $lifetime);
    }

    public function product($locale, $slug, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/product-info?slug=' . $slug, [
            '_embed' => 1
        ], $lifetime);
    }

    public function search($locale, $search, $page = 1, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/search/' . str_replace('-', '+', $search) . '/' . $page, [], $lifetime);
    }

    //Case Knowledge
    public function caseknowledge($locale, $page=1, $lifetime = null)
     {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/kb', [
            '_embed' => 1,
            'page' => $page
        ], $lifetime);
    }

    public function caseknowledge_post($locale, $slug, $lifetime = null)
     {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/kb?slug='. $slug, [
            '_embed' => 1
        ], $lifetime);
     }

    /**
     * Get posts based on category
     * @param integer $category Wordpress category ID
     */
    public function caseknowledge_by_product($locale, $productId, $page =1, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/kb?tx_products=' . $productId, [
            'page' => $page,
            '_embed' => 1,
        ], $lifetime);
    }

    public function caseknowledge_search($locale, $q, $page =1, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/kb?search=' . $q, [
            'page' => $page,
            '_embed' => 1,
        ], $lifetime);
    }

    public function caseknowledge_by_tag($tag, $page =1, $lifetime = null) {
        return $this->_get('/wp-json/wp/v2/kb', [
            'kb_tag' => $tag,
            'page' => $page,
            '_embed' => 1,
        ], $lifetime);
    }

    public function tax_products($lifetime = null)
    {
        return $this->_get('/wp-json/wp/v2/tx_products', [
            'per_page' => 20
        ], $lifetime);
    }

    public function tax_kb_tags($lifetime = null)
    {
        return $this->_get('/wp-json/wp/v2/kb_tags', [
            'per_page' => 100
        ], $lifetime);
    }

    public function support_page($locale, $type, $page =1, $lifetime = null) {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/support-page', [
            'support_type' => $type,
            'per_page' => 100,
            '_embed' => 1,
        ], $lifetime);
    }

    public function support_search($locale, $q, $page = 1, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        return $this->_get($prepend . '/wp-json/wp/v2/multiple-post-type?search=' . $q . '&type[]=support_pages&type[]=knowledge_base', [
            'page' => $page,
            '_embed' => 1,
        ], $lifetime);

    }

    public function hot_issues($locale, $productId, $lifetime = null)
    {
        $prepend = getWpLang($locale, request()->session()->get('lang'));

        $articles = collect($this->_get($prepend . '/wp-json/wp/v2/kb', [
            'tx_products' => $productId,
            'per_page' => 100,
            '_embed' => 1,
        ], $lifetime)->get('results'));

        return $articles->where('acf.hot_issue', true);
    }

    /**
     * Process the required request and return a suitable json response
     * @param  string - $method - the api method to call
     * @return json - JSON response from the request
     */
     public function _get($method, $params = [], $lifetime)
     {
        //Work out the cache lifetime is
        $lifetime = is_null($lifetime) ? $this->lifetime : $lifetime;

        //Build a name for this request to store in cache
        $cacheKey = $method . '-' . implode('-', array_flatten($params));

        try {
            //Check if there's a valid cache entry
            return Cache::remember($cacheKey, $lifetime, function() use ($method, $params) {
                //If not send the request
                $response = $this->client->get($this->endpoint . $method, [], $params);

                //check the response code
                if ($response->code === 200) {

                    /**
                      * Include the total results and the number of pages
                      * in the returned dataset
                      */
                    return collect([
                        'totalResults' => isset($response->headers['X-WP-Total']) ? $response->headers['X-WP-Total']: false,
                        'totalPages' => isset($response->headers['X-WP-TotalPages']) ? $response->headers['X-WP-TotalPages']: false,
                        'results' => $response->body
                    ]);
                 } else {
                    throw new \Exception($response->body);
                 }

             });

        } catch (\Exception $e) {
            return 'API request failed: ' . $e->getMessage();
        }
     }
}
