<?php

require_once __DIR__ . '/sqlcommands/sqlcommands.php';

session_start();
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$con = realizarCon();


if ($con != false) {

  $json = file_get_contents('php://input');
  $data = json_decode($json, true);
  
  $type = $data["type"];
  $name = $data["user"]["name"];
  $password = $data["user"]["password"];
  
  $exists = compUsuario($name, $con);
  
  if ($type == 1) {
    $isLogged = logIn($name, $password, $con);
    if ($isLogged) {
      echo '{ "mensaje": "4" }';
    } else {
      echo '{ "mensaje": "5" }';
    }
  } else if ($type == 2) {
    if ($exists == false) {
      echo '{ "mensaje": "1" }';
    } else {
      $mail = $data["user"]["mail"];

      $comp = registrarUsuario($name, $password, $mail, $con);
      if ($comp) {
        echo '{ "mensaje": "2" }';
      } else { 
        echo '{ "mensaje": "3" }';
      }
    }
  }
} else {
  echo '{ "mensaje": "0" }';
}




/*
0 --> Conexión rechazada
1 --> Usuario ya existe
2 --> Usuario registrado con éxito
3 --> Error al registrar al usuario
4 --> Usuario loggeado con éxito
5 --> Error al loggear al usuario
*/
