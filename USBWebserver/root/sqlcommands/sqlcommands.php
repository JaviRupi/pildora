<?php

header("Content-Type: text/html;charset=utf-8");

function registrarUsuario($name, $password, $mail, $con)
{
    mysqli_set_charset($con, "utf8");
    $consulta = mysqli_query($con, "Insert into usuario values ('$name','$mail','$password')");
    if ($consulta == 1) {
        return true;
    } else {
        return false;
    }
    
}

function realizarCon()
{
    $servidor = "localhost";
    $usuari = "root";
    $contraseña = "usbw";
    $db = "chalenele";

    $con = mysqli_connect($servidor, $usuari, $contraseña, $db);
    
    if (!$con) {
        die("No se ha podido ejecutar la vaina" . mysqli_connect_error() . "<br>");
        return false;
    } else {
        mysqli_set_charset($con, "utf8");
        $_SESSION["con"] = $con;
        return $con;
    }
}

function compUsuario($mail, $con) {
    $consulta = mysqli_query($con, "select count(*) from usuario where nombre='$mail'");
    $resultados = mysqli_fetch_assoc($consulta);
    $array = array_values($resultados);
    if ($array['0'] >= 1) {
        return false;
    } else {
        return true;
    }
}

function logIn($name, $password, $con) {
    $query = mysqli_query($con, "select count(*) from usuario where nombre='$name' and contraseña='$password'");
    $res = mysqli_fetch_assoc($query);
    $array = array_values($res);
    if ($array['0'] >= 1) {
        return true;
    } else {
        return false;
    }
}
function insertarImg($img,$con){
    $image = addcslashes(file_get_contents($_FILES['imagen']['tmp_name']));
    $query = "INSERT INTO wiki ($img)";
}

function cargarImg($nom,$des,$img,$con)
{
$foto= "Select count(*) from wiki where nombre = '$nom'";
$sth = $con->query($foto);
$result
}