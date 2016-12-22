<!DOCTYPE HTML>
<html>
<head>
	<!-- GET SOURCE CODE ON GITHUB: https://github.com/wUFr/LetItSnow -->
	<meta charset="utf-8" />
	<?php
	$dir = $_SERVER["DOCUMENT_ROOT"];
	$less_files = "/less/router.less";
	$config = array("cache_dir" => $dir . "/css","compress" => true,"source_map" => false,);
	include_once($dir . "/lessphp/Autoloader.php");Less_Autoloader::register();
	$less_files = $dir . $less_files;$less_files = array($less_files => "/");$css_file_name = Less_Cache::Get($less_files, $config);
	?>
	<link rel="stylesheet" href="/css/<?php echo $css_file_name; ?>" />
	<script src="/js/jquery-3.1.1.min.js" type="text/javascript"></script>
	<script src="/js/effects.min.js" type="text/javascript" async></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Foreveryone PF 2017</title>
</head>

<body>
	<div class="snow_wrapper">
		<div class="snow_front"></div>
		<div class="snow_front second"></div>
		<div class="snow_mid"></div>
		<div class="snow_mid second"></div>
		<div class="snow_back"></div>
		<div class="snow_back second"></div>
	</div>
	<div class="forrest">
		<div class="close" id="forrest_close"></div>
		<div class="front" id="forrest_front"></div>
		<div class="mid" id="forrest_mid"></div>
		<div class="far" id="forrest_far"></div>
	</div>
	<div class="logo">
		<h1>Veselé Vánoce a štastný Nový rok přeje</h1>
		<div class="inside">
			<img src="/img/logo_feo.png" alt="Foreveryone" />
			<div class="ice"></div>
		</div>	
	</div>
</body>
</html>