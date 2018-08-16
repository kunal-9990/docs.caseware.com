<?php

if(isset($_POST['title']))
{
  $title = $_POST['title'];
}
if(isset($_POST['url']))
{
  $url = $_POST['url'];
}

if(!isset($_COOKIE['recentpages'])) {
  $cookie_element = array("url"=>$url, "title"=>$title);
  $cookie_value = array($cookie_element);
  $cookie_value_serialized = serialize($cookie_value);
  setcookie('recentpages', $cookie_value_serialized, time() + (86400 * 30), "/");

  // ob_start();
  // var_dump($cookie_value);
  // $result = ob_get_clean();
}
else {
  $cookie_value = unserialize($_COOKIE['recentpages']);
  for ($i = 0; $i <= count($cookie_value); $i++) {
    if($cookie_value[$i]['title']==$title){
      unset($cookie_value[$i]);
    }
    else{
      if(count($cookie_value)==6){
        array_pop($cookie_value);
      }
    }
  }

  $cookie_element = array("url"=>$url, "title"=>$title);
  array_unshift($cookie_value, $cookie_element);
  $cookie_value_serialized = serialize($cookie_value);
  setcookie('recentpages', $cookie_value_serialized, time() + (86400 * 30), "/");

  // ob_start();
  // var_dump(unserialize($_COOKIE['recentpages']));
  // $result = ob_get_clean();

}
 echo json_encode($cookie_value);
?>
