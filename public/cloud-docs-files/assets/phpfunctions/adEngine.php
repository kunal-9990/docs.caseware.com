<?php

$dir = "../../Resources/advertisements";

// Sort in ascending order - this is default
$adsArray = scandir($dir);
$numberOfAds = count($adsArray)-1;


if(!isset($_COOKIE['adCycle'])) {
  $cookie_value = 2;
  setcookie('adCycle', $cookie_value , time() + (86400 * 30), "/");
}
else {
  $cookie_value = $_COOKIE['adCycle'];
  if($cookie_value == $numberOfAds){
    $cookie_value = 2;
    setcookie('adCycle', $cookie_value , time() + (86400 * 30), "/");
  }
  else{
    $cookie_value++;
    setcookie('adCycle', $cookie_value , time() + (86400 * 30), "/");
  }
}

// print_r($adsArray);
print_r($adsArray[$cookie_value]);


?>
