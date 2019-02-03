<?php

add_action('acf/init', function() {
	acf_add_options_page(array(
		'menu_title' => 'Theme Options',
		'menu_slug' => 'theme-options',
		'capability' => 'edit_posts'
	));
});
