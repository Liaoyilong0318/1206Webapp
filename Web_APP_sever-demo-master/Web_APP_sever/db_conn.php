<?php
header("Access-Control-Allow-Origin: *");
$link = mysqli_connect(
    "210.70.80.21",
    "s107021227",
    "PueCh3yi",
    "s107021227"
);

if(!$link){
    echo "Error: unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno:" . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging errno:" . mysqli_connect_errno() . PHP_EOL;
    exit;
}

$link -> set_charset("utf8");