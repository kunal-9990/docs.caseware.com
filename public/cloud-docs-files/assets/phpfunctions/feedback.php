<?php

function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

if(isset($_POST['page']))
{
  $page = $_POST['page'];
}
if(isset($_POST['fb']))
{
  $fb = $_POST['fb'];
}
if(isset($_POST['title']))
{
  $title = $_POST['title'];
}

$ipAddress = get_client_ip();

$txt = $title.",".$page.",".$fb.",".gmdate("Y-m-d\TH:i:s\Z").",".$ipAddress;
$myfile = file_put_contents('feedback.csv', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
//Close Stream
fclose($myfile);
?>
