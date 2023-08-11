<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["nombre"];
    $email = $_POST["correo"];
    $phone = $_POST["telefono"];
    $message = $_POST["mensaje"];
    
    $to = "legales@abogadoscyt.com";
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email\r\n";
    
    $fullMessage = "Nombre: $name\n";
    $fullMessage .= "Correo Electrónico: $email\n";
    $fullMessage .= "Teléfono: $phone\n";
    $fullMessage .= "Mensaje: $message\n";
    
    mail($to, $subject, $fullMessage, $headers);
    
    echo "¡Gracias! Su mensaje ha sido enviado.";
}
?>
