<?php
//header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
	header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
	header("Content-Type: application/json; charset=utf-8");

#header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
#header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$url="http://blockchainlotteries.com/lastdata.php?rr=" . time();

//echo $url;
$json = file_get_contents($url);

header('Content-Type: application/json');
echo $json;
