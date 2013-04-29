<?php

header('Access-Control-Allow-Origin: *');
ini_set('display_errors', 1); 
error_reporting(E_ALL);

$url = $_POST['url'];

$type = pathinfo($url, PATHINFO_EXTENSION);
$data = file_get_contents($url);
$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
echo $base64;

?>