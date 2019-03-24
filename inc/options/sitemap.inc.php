<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_sitemap',
		'title' => 'Sitemap',
		'menu_order' => 30,
		'fields' => array(
			array(
				'key' => 'xo_sitemap_exclude',
				'label' => 'Exclude from Sitemap',
				'name' => 'sitemap_exclude',
				'type' => 'true_false',
				'wrapper' => array(
					'width' => 20
				)
			)
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page'
				)
			)
		)
	));
}, 10, 0);

add_filter('xo/sitemap/posts/query', function($postsQuery) {
	$sitemapExcludeMetaQueries = array(
		'relation' => 'OR',
		array(
			'key' => 'sitemap_exclude',
			'value' => '',
			'compare' => 'NOT EXISTS'
		),
		array(
			'key' => 'sitemap_exclude',
			'value' => 1,
			'compare' => '!='
		)
	);

	if (!isset($postsQuery['meta_query']))
		$postsQuery['meta_query'] = array();

	$postsQuery['meta_query'] = array_merge(
		$postsQuery['meta_query'],
		$sitemapExcludeMetaQueries
	);

	return $postsQuery;
}, 10, 1);