<?php
    $destino = "f.latorre.carvajal@gmail.com";
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $telefono = $_POST["phone"];
    $mensaje = $_POST["message"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " .$email . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino, "Consulta Página", $contenido);
    header("Location:gracias.html");
?>