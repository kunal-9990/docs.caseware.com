<?php
switch ($_POST['function']) {
    case "updateFilter":
        updateFilter();
        break;
    case "loadFilter":
        loadFilter();
        break;
    case "setFilter":
        setFilter();
        break;
    default:
        return;
}

function updateFilter(){
if(isset($_POST['sefilter']))
{
  $sefilter = $_POST['sefilter'];
}

if(isset($_POST['analyticsfilter']))
{
  $analyticsfilter = $_POST['analyticsfilter'];
}

if(isset($_POST['timefilter']))
{
  $timefilter = $_POST['timefilter'];
}

if(isset($_POST['taxfilter']))
{
  $taxfilter = $_POST['taxfilter'];
}

if(isset($_POST['wpfilter']))
{
  $wpfilter = $_POST['wpfilter'];
}

if(isset($_POST['auditfilter']))
{
  $auditfilter = $_POST['auditfilter'];
}

$filtersettings = array("se"=>$sefilter,"analytics"=>$analyticsfilter,"time"=>$timefilter,"tax"=>$taxfilter,"wp"=>$wpfilter,"audit"=>$auditfilter);
$cookie_value_serialized = serialize($filtersettings);
setcookie('filtersettings', $cookie_value_serialized, time() + (86400 * 30), "/");
echo json_encode($filtersettings);
}

function setFilter(){
$currentSettings = unserialize($_COOKIE['filtersettings']);
if(isset($_POST['sefilter']))
{
  $sefilter = $_POST['sefilter'] | $currentSettings['se'];
}

if(isset($_POST['analyticsfilter']))
{
  $analyticsfilter = $_POST['analyticsfilter'] | $currentSettings['analytics'];
}

if(isset($_POST['timefilter']))
{
  $timefilter = $_POST['timefilter'] | $currentSettings['time'];
}

if(isset($_POST['taxfilter']))
{
  $taxfilter = $_POST['taxfilter'] | $currentSettings['tax'];
}

if(isset($_POST['wpfilter']))
{
  $wpfilter = $_POST['wpfilter'] | $currentSettings['wp'];
}

if(isset($_POST['auditfilter']))
{
  $auditfilter = $_POST['auditfilter'] | $currentSettings['audit'];
}

$filtersettings = array("se"=>$sefilter,"analytics"=>$analyticsfilter,"time"=>$timefilter,"tax"=>$taxfilter,"wp"=>$wpfilter,"audit"=>$auditfilter);
$cookie_value_serialized = serialize($filtersettings);
setcookie('filtersettings', $cookie_value_serialized, time() + (86400 * 30), "/");
echo json_encode($filtersettings);
}



function loadFilter(){
  echo json_encode(unserialize($_COOKIE['filtersettings']));
}

?>
