<?php

add_action('acf/init', function() {
	acf_add_options_page(array(
		'menu_title' => 'Theme Options',
		'menu_slug' => 'xo-theme-options',
		'capability' => 'edit_posts'
	));
}, 10, 0);

add_action('acf/init', function() {
	acf_add_options_sub_page(array(
		'page_title' => 'Scripts',
		'menu_title' => 'Scripts',
		'menu_slug' => 'xo-theme-options-scripts',
		'parent_slug' => 'xo-theme-options',
	));
}, 10, 0);

add_action('acf/init', function() {
	acf_add_options_sub_page(array(
		'page_title' => 'Footer',
		'menu_title' => 'Footer',
		'menu_slug' => 'xo-theme-options-footer',
		'parent_slug' => 'xo-theme-options',
	));
}, 10, 0);