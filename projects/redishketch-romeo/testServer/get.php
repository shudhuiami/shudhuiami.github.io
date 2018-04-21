<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = array(
    'Methods' => 'GET',
    'full_name' => 'Ahmed Zobayer',
    'username' => 'shudhuiami',
    'bio' => [
        'age' => 22,
        'address' => '205 East-kazipara, Mirpur, Dhaka-1216',
    ]
);

echo json_encode($data, true);