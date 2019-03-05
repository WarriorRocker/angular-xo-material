<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_content',
		'title' => 'Content',
		'menu_order' => 10,
		'fields' => array(
			array(
				'key' => 'xo_content_sections',
				'label' => 'Sections',
				'name' => 'sections',
				'type' => 'flexible_content',
				'button_label' => 'Add Section',
				'layouts' => array(
					array(
						'key' => 'xo_content_sections_heading',
						'label' => 'Heading',
						'name' => 'heading',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_heading_type',
								'label' => 'Type',
								'name' => 'type',
								'type' => 'select',
								'required' => 1,
								'choices' => array(
									'h1' => 'H1',
									'h2' => 'H2',
									'h3' => 'H3',
									'h4' => 'H4',
									'h5' => 'H5',
									'h6' => 'H6'
								),
								'wrapper' => array(
									'width' => 10
								)
							),
							array(
								'key' => 'xo_content_sections_heading_heading',
								'label' => 'Heading',
								'name' => 'heading',
								'type' => 'text',
								'required' => 1,
								'wrapper' => array(
									'width' => 55
								)
							),
							array(
								'key' => 'xo_content_sections_heading_id',
								'label' => 'ID',
								'name' => 'id',
								'type' => 'text',
								'wrapper' => array(
									'width' => 35
								)
							)
						)
					),
					array(
						'key' => 'xo_content_sections_content',
						'label' => 'Content',
						'name' => 'content',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_content_content',
								'label' => 'Content',
								'name' => 'content',
								'type' => 'wysiwyg'
							)
						)
					),
					array(
						'key' => 'xo_content_sections_code',
						'label' => 'Code',
						'name' => 'code',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_code_title',
								'label' => 'Title',
								'name' => 'title',
								'type' => 'text',
								'wrapper' => array(
									'width' => '25'
								)
							),
							array(
								'key' => 'xo_content_sections_code_mode',
								'label' => 'Mode',
								'name' => 'mode',
								'type' => 'select',
								'wrapper' => array(
									'width' => '25'
								),
								'choices' => array(
									'text/javascript' => 'JavasScript',
									'application/typescript' => 'TypeScript',
									'application/x-ejs' => 'HTML',
									'application/x-httpd-php' => 'PHP',
									'application/x-sh' => 'Shell'
								)
							),
							array(
								'key' => 'xo_content_sections_code_content',
								'label' => 'Content',
								'name' => 'content',
								'type' => 'textarea'
							)
						)
					),
					array(
						'key' => 'xo_content_sections_table',
						'label' => 'Table',
						'name' => 'table',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_table_table',
								'label' => 'Table',
								'name' => 'table',
								'type' => 'table',
								'use_header' => 0
							)
						)
					),
					array(
						'key' => 'xo_content_sections_navlist',
						'label' => 'Nav List',
						'name' => 'nav-list',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_navlist_items',
								'label' => 'Items',
								'name' => 'items',
								'type' => 'repeater',
								'layout' => 'block',
								'sub_fields' => array(
									array(
										'key' => 'xo_content_sections_navlist_items_title',
										'label' => 'Title',
										'name' => 'title',
										'type' => 'text',
										'wrapper' => array(
											'width' => 25
										)
									),
									array(
										'key' => 'xo_content_sections_navlist_items_href',
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
					),
					array(
						'key' => 'xo_content_sections_spacer',
						'label' => 'Spacer',
						'name' => 'spacer',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'xo_content_sections_spacer_class',
								'label' => 'Class',
								'name' => 'class',
								'type' => 'select',
								'choices' => array(
									'small' => 'Small',
									'medium' => 'Medium',
									'large' => 'Large'
								)
							)
						)
					)
				)
			)
		)
	));
}, 10, 0);


add_filter('acf/format_value/key=xo_content_sections', function ($value, $postId, $field) {
	if ((empty($value)) || (!is_array($value)))
		return $value;

	foreach ($value as &$section) {
		if (!empty($section['acf_fc_layout'])) {
			switch ($section['acf_fc_layout']) {
				case 'heading':
					if ((!empty($section['heading'])) && empty($section['id'])) {
						$section['id'] = sanitize_title($section['heading']);
					}

					break;
			}
		}
	}

	return $value;
}, 10, 3);

add_filter('acf/update_value/key=xo_content_sections_heading_id', function ($value, $postId, $field) {
	return sanitize_title($value);
}, 10, 3);
