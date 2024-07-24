<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Traitez les données envoyées via GET
    $name = htmlspecialchars(trim($_GET['name']));
    $email = htmlspecialchars(trim($_GET['email']));
    $message = htmlspecialchars(trim($_GET['message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Adresse email invalide.");
    }

    // Procédez avec l'envoi de l'email ou autre traitement
    echo "Formulaire soumis avec succès.";
}
?>
