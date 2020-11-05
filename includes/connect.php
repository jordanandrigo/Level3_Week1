<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'IDP_FriendData',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = 'root'; // for windows leave 'root' blank

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "Whaz up! You're a superstar!"; // echo followed by a "string" will show on browser
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }