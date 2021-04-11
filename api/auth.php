<?php
$path = $_SERVER['DOCUMENT_ROOT'];
$path .= "/config/credentials.php";
include_once($path);

$pdo = new PDO('mysql:host='.DBHOST.';dbname='.DBNAME, DBUSER);

$invite_code = $_POST['invite-code'];
$email = $_POST['email'];
$password = $_POST['password'];
$remember = $_POST['remember_me'];

if(strlen($invite_code) == 0 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) == 0) {
 // Todo: Handle missing user input.
 echo('
 {"status":"missing_input"}
 ');
 die();
}else{
    $statement = $pdo->prepare("SELECT * FROM users WHERE email = :email");
        $result = $statement->execute(array('email' => $email));
        $user = $statement->fetch();
        
        if($user !== false) {
            // User exists, login
            if(password_verify($password, $user['password'])){
                // Todo: Generate real unique session token, pass it off to the client and handle auth.
            }
        }else{
            // User doesn't exist, register
        }
};