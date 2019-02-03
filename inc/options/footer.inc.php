<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_footer',
		'title' => 'Footer Options',
		'menu_order' => 10,
		'fields' => array(
			array(
				'key' => 'xo_footer_enabled',
				'label' => 'Enabled',
				'name' => 'xo_footer_enabled',
				'type' => 'true_false'
			),
			array(
				'key' => 'xo_footer_logo',
				'label' => 'Logo Area',
				'name' => 'xo_footer_logo',
				'type' => 'wysiwyg'
			),
			array(
				'key' => 'xo_footer_legal',
				'label' => 'Legal Area',
				'name' => 'xo_footer_legal',
				'type' => 'wysiwyg'
			)
		),
		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'theme-options',
				)
			)
		)
	));
});
