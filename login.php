<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];
  
  // Aquí puedes realizar la lógica para verificar las credenciales del usuario
  
  if ($username == "ejemplo" && $password == "contraseña") {
    echo "Inicio de sesión exitoso";
  } else {
    echo "Nombre de usuario o contraseña incorrectos";
  }
}
?>