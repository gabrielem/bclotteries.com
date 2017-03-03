<?php 

$url="http://blockchainlotteries.com/lastdata.php?rr=" . time();

//echo $url;
$json = file_get_contents($url);

header('Content-Type: application/json');
echo $json;
