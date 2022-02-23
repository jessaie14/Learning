<!DOCTYPE html>
<html>
    <head>
        <title>Notre première instruction : echo</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <h2>Affichage de texte avec PHP</h2>
        <?php $userAge = 17; ?>
        <p>
            Cette ligne a été écrite entièrement en HTML.<br />
            <?php echo("Celle-ci a été écrite entièrement en PHP."); ?>
             <p>Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>  <!-- La date s'affiche -->
             <?php echo($userAge); ?>

             <?php
                $variable = "Mon \"nom\" est Mathieu";
                $variable = 'Je m\'appelle Mathieu';
            ?>
            <?php
            $fullname = 'Mathieu Nebra';
            echo 'Bonjour ' . $fullname . ' et bienvenue sur le site !'; // OK
            ?>

            <?php
            $isEnabled = true; // La condition d'accès

            if ($isEnabled == true) {
                echo "Vous êtes autorisé(e) à accéder au site ✅";
            }
            ?>

            <?php
            for ($lines = 0; $lines <= 2; $lines++) // (initialisation;condition;incrémentation)
            {
            echo $users[$lines][0] . ' ' . $users[$lines][1] . '<br />';
            }
            ?>

            <?php
            $recipeTitle = 'Cassoulet';
            echo "La recette du " . $recipeTitle;
            // Cela affichera : La recette du Cassoulet
            ?>
 <!-- Fonctions -->
            <?php

            $recipe = [
            'title' => 'Escalope milanaise',
            'recipe' => '',
            'author' => 'mathieu.nebra@exemple.com',
            'is_enabled' => true,
            ];

            allowRecipe($recipe); // retourne le booléen true
        </p>

        // envoi d'un formulaire html vers php

        <form action="submit_contact.php" method="GET">
    <div>
        <label for="email">Email</label>
        <input type="email" name="email">
    </div>
    <div>
        <label for="message">Votre message</label>
        <textarea placeholder="Exprimez vous" name="message"></textarea>
    </div>
    <button type="submit">Envoyer</button>
</form>
// sur le php de reception : 

<h1>Message bien reçu !</h1>
        
<div class="card">
    
<div class="card-body">
    <h5 class="card-title">Rappel de vos informations</h5>
    <p class="card-text"><b>Email</b> : <?php echo $_GET['email']; ?></p>
    <p class="card-text"><b>Message</b> : <?php echo $_GET['message']; ?></p>
</div>
</div>

// test si la variable existe
<?php

if (!isset($_GET['email']) || !isset($_GET['message']))
{
	echo('Il faut un email et un message pour soumettre le formulaire.');
	
	// Arrête l'exécution de PHP
    return;
}

?>

// test si la variable correspond à l'attendu
<?php
if (
    (!isset($_GET['email']) || !filter_var($_GET['email'], FILTER_VALIDATE_EMAIL))
    || (!isset($_GET['message']) || empty($_GET['message']))
    )
{
	echo('Il faut un email et un message valides pour soumettre le formulaire.');
    return;
}

// Protéger les ecritures de l'utilisateur pour qu'ils evitent d'inserer un <script> xxx </script>

<p><b>Message</b> : <?php echo htmlspecialchars($_POST['message']); ?></p>


    </body>
</html>