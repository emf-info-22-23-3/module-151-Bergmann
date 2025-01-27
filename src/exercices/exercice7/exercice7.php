<?php
	$bdd = new PDO('mysql:host=localhost;dbname=nomDB', 'root', 'pwd');
	$reponse = $bdd->query('SELECT titre FROM jeux_video');
	
	
	while ($row = $response->fetch())
	{
	
		echo <p>$row['titre']</p>;

	
	}
	$reponse->closeCursor();
?>
