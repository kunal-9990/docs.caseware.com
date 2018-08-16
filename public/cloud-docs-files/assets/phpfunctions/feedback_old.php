<?php
//This is an old version of the feedback function. This function updates the feedback count of each topic
//in the csv, keeping 1 row per topic. The new style tracks feedback in a log style, including timestamp and ip address
if(isset($_POST['page']))
{
  $page = $_POST['page'];
}
if(isset($_POST['fb']))
{
  $fb = $_POST['fb'];
}
$pageArray = array();
$handle = @fopen("feedback.csv", "r");
if(flock($handle, LOCK_EX)) {
if ($handle) {
  while (($row = fgetcsv($handle, 4096)) !== false) {
    $values = array("Yes"=>$row[1], "No"=>$row[2]);
    $pageArray += array( $row[0] =>$values);
  }
  if (!feof($handle)) {
    echo "Error: unexpected fgets() fail\n";
  }
  fclose($handle);
}

if(array_key_exists($page,$pageArray)){
  if($fb=='Yes'){
    $pageArray[$page]['Yes']++;
  }
  else{
    $pageArray[$page]['No']++;
  }
}
else{
  if($fb=='Yes'){
    $values = array("Yes"=>1, "No"=>0);
    $pageArray += array( $page =>$values);
  }
  else{
    $values = array("Yes"=>0, "No"=>1);
    $pageArray += array( $page =>$values);
  }
}
fclose($handle);

$newCSV;
foreach ($pageArray as $key => $value) {
  echo $key;
  $newCSV .= $key.",".$value['Yes'].",".$value['No']."\n";
}
$myfile = fopen("feedback.csv", "w") or die("Unable to open file!");
fwrite($myfile, $newCSV);
fclose($myfile);
}
else {
    echo "Could not Lock File!";
}

//Close Stream
fclose($handle);
?>
