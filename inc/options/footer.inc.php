<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_footer',
		'title' => 'Footer Options',
		'menu_order' => 20,
		'fields' => array(
			array(
				'key' => 'xo_footer_sections',
				'label' => 'Sections',
				'name' => 'xo_footer_sections',
				'type' => 'repeater',
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'xo_footer_sections_section_align',
						'label' => 'Section Align',
						'name' => 'section_align',
						'type' => 'select',
						'choices' => array(
							'' => 'Default',
							'justify-center' => 'Center',
							'justify-left' => 'Left',
							'justify-right' => 'Right'
						),
						'wrapper' => array(
							'width' => 25
						)
					),
					array(
						'key' => 'xo_footer_sections_content_align',
						'label' => 'Content Align',
						'name' => 'content_align',
						'type' => 'select',
						'choices' => array(
							'' => 'Default',
							'align-center' => 'Center',
							'align-left' => 'Left',
							'align-right' => 'Right'
						),
						'wrapper' => array(
							'width' => 25
						)
					),
					array(
						'key' => 'xo_footer_sections_content',
						'label' => 'Content',
						'name' => 'content',
						'type' => 'textarea'
					)
				)
			)
		),
		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'theme-options'
				)
			)
		)
	));
});
