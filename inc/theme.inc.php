<?php

// Register basic theme support and features
add_action('init', function() {
	add_theme_support('title-tag');

	register_nav_menus(array(
		'header_left' => __('Header Left'),
		'header_right' => __('Header Right')
	));
}, 10, 0);

// Remove various unused WordPress add-ins and hooks
add_action('init', function() {
	remove_action('wp_head', '_wp_render_title_tag', 1);
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'rest_output_link_wp_head', 10);
	remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wp_shortlink_wp_head');
	remove_action('wp_head', 'rel_canonical');
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'feed_links', 2);
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'parent_post_rel_link', 10, 0);
	remove_action('wp_head', 'start_post_rel_link', 10, 0);
	remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
	remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'wp_resource_hints', 2);
	remove_action('wp_head', 'wp_post_preview_js', 1);

	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');

	add_filter('show_admin_bar', '__return_false', 1);

	add_filter('tiny_mce_plugins', function($plugins) {
		if (is_array($plugins))
			return array_diff($plugins, array('wpemoji'));

		return $plugins;
	}, 10, 1);
}, 10, 0);

// Remove various unused WordPress styles and scripts
add_action('wp_enqueue_scripts', function() {
	wp_deregister_style('dashicons');
	wp_deregister_style('wp-block-library');
	wp_deregister_script('wp-embed');
}, 10, 0);
