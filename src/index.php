<?php
	//functions
	require_once 'includes/config.php';
	require_once 'includes/functions.php';


	//twig setup
	require_once '../vendor/autoload.php';
	$loader = new Twig_Loader_Filesystem(__DIR__ .'/templates');
	$twig = new Twig_Environment($loader);

	/**
	 *	Database Connection
	 *  -------------------------------------------
	 */
	$db = getDatabase();

	// get all users
	$stmt = $db->query('SELECT * FROM users');
	$users = $stmt->fetchAll(PDO::FETCH_ASSOC);


	$tpl = $twig->loadTemplate('cards.twig');
	echo $tpl->render(array(
		'users' => $users,
	));
