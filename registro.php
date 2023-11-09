<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  
  // Aquí puedes realizar la lógica para registrar al usuario en la base de datos
  
  echo "Registro exitoso";
}
?>