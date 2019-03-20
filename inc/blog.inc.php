<?php

// Register the blog post type
add_action('init', function() {
	register_post_type('blog', array(
		'labels' => array(
			'name' => __('Blog', 'xo-material'),
			'singular_name' => __('Blog', 'xo-material')
		),
		'public' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'supports' => array(
			'title', 'revisions', 'page-attributes'
		),
		'menu_icon' => 'dashicons-admin-post',
		'rewrite' => array(
			'slug' => 'blog/%blog_category%'
		)
	));
}, 10, 0);

// Register blog_category taxonomy
add_action('init', function () {
	register_taxonomy('blog_category', 'blog', array(
		'labels' => array(
		    'name' => __('Categories', 'xo-material'),
		    'singular_name' => __('Category', 'xo-material'),
		    'search_items' => __('Search Categories', 'xo-material'),
		    'all_items' => __('All Categories', 'xo-material'),
		    'edit_item' => __('Edit Category', 'xo-material'),
		    'view_item' => __('View Category', 'xo-material'),
		    'update_item' => __('Update Category', 'xo-material'),
		    'add_new_item' => __('Add New Category', 'xo-material'),
		    'new_item_name' => __('New Category Name', 'xo-material'),
		    'not_found' => __('No categories found.', 'xo-material'),
		    'no_terms' => __('No categories', 'xo-material'),
		    'items_list_navigation' => __('Categories list navigation', 'xo-material'),
		    'items_list' => __('Categories list', 'xo-material')
		),
		'hierarchical' => false,
		'rewrite' => array(
			'slug' => 'blog'
		),
	));
}, 10, 0);

// Modify blog posts columns and add category column
add_filter('manage_blog_posts_columns', function($columns) {
	$columns['blog_category'] = 'Category';
	return $columns;
}, 10, 1);

// Modify data display in blog posts columns
add_action('manage_blog_posts_custom_column', function($column) {
	global $post;

	switch ($column) {
		case 'blog_category':
			$terms = get_the_terms($post, 'blog_category');
			$output = array();
			if ($terms)
				foreach ($terms as $term)
					$output[] = $term->name;

			if ($output)
				echo implode(', ', $output);

			break;
	}
}, 10, 1);

// Modify blog post link to include category
add_filter('post_type_link', function($post_link, WP_Post $post) {
	if ((is_object($post)) && ($post->post_type == 'blog')) {
		$terms = wp_get_object_terms($post->ID, 'blog_category');
		return str_replace('%blog_category%', (($terms) ? $terms[0]->slug : 'category'), $post_link);
	}
	return $post_link;
}, 1, 3);

// Add rewrite rule for blog post links
add_filter('init', function() {
	add_rewrite_rule(
		'blog\/([^\/]*)\/([^\/]*)$',
		'index.php?post_type=blog&taxonomy=blog_category&term=$matches[1]&name=$matches[2]'
	);
}, 10, 0);
