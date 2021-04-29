<?php
$path = $_SERVER['DOCUMENT_ROOT'];
$path .= "/config/credentials.php";
include_once($path);

$pdo = new PDO('mysql:host='.DBHOST.';dbname='.DBNAME, DBUSER);

$invite_code = $_POST['invite-code'];
$email = $_POST['email'];
$password = $_POST['password'];
$remember = $_POST['remember_me'];