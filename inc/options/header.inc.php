<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_header',
		'title' => 'Header',
		'menu_order' => 10,
		'fields' => array(
			array(
				'key' => 'xo_header_options',
				'label' => 'Header Options',
				'name' => 'header',
				'type' => 'group',
				'sub_fields' => array(
					array(
						'key' => 'xo_header_h1',
						'label' => 'H1',
						'name' => 'h1',
						'type' => 'text'
					),
					array(
						'key' => 'xo_header_h2',
						'label' => 'H2',
						'name' => 'h2',
						'type' => 'text'
					),
					array(
						'key' => 'xo_header_buttons',
						'label' => 'Buttons',
						'name' => 'buttons',
						'type' => 'repeater',
						'layout' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_header_buttons_title',
								'label' => 'Title',
								'name' => 'title',
								'type' => 'text',
								'wrapper' => array(
									'width' => 25
								)
							),
							array(
								'key' => 'xo_header_buttons_href',
								'label' => 'Href',
								'name' => 'href',
								'type' => 'text',
								'wrapper' => array(
									'width' => 25
								)
							)
						)
					)
				)
			)
		)
	));
}, 10, 0);
