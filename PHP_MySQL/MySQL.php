 <?php SELECT * FROM recipes ?>  <!-- prendre tout ce qu'il y a dans la table -->

 <?php
$recipesStatement = $db->prepare('SELECT * FROM recipes'); // a l'aide du PDO
?>

<?php
$sqlQuery = 'SELECT * FROM recipes WHERE is_enabled = TRUE'; ?>