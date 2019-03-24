<?php

add_action('acf/init', function() {
	acf_add_local_field_group(array(
		'key' => 'xo_scripts',
		'title' => 'Scripts',
		'menu_order' => 10,
		'fields' => array(
			array(
				'key' => 'xo_scripts_head',
				'label' => 'Head',
				'name' => 'xo_scripts_head',
				'type' => 'repeater',
				'layout' => 'block',
				'button_label' => 'Add Head Content',
				'sub_fields' => array(
					array(
						'key' => 'xo_scripts_head_content',
						'label' => 'Content',
						'name' => 'content',
						'type' => 'textarea'
					)
				)
			),
			array(
				'key' => 'xo_scripts_footer',
				'label' => 'Footer',
				'name' => 'xo_scripts_footer',
				'type' => 'repeater',
				'layout' => 'block',
				'button_label' => 'Add Footer Content',
				'sub_fields' => array(
					array(
						'key' => 'xo_scripts_footer_content',
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
					'value' => 'xo-theme-options-scripts'
				)
			)
		)
	));
}, 10, 0);

class XoMaterialScripts
{
	function __construct() {
		add_action('wp_head', array($this, 'RenderWpHead'), 10, 0);
		add_action('wp_footer', array($this, 'RenderWpFooter'), 10, 0);
	}

	public function RenderWpHead() {
		$this->RenderFieldContents('xo_scripts_head');
	}

	public function RenderWpFooter() {
		$this->RenderFieldContents('xo_scripts_footer');
	}

	private function RenderFieldContents($field) {
		$contents = get_field($field, 'option');

		if ((empty($contents)) || (!is_array($contents)))
			return;

		$output = array_column($contents, 'content');

		if ($output)
			echo implode("\n", $output);
	}
}
new XoMaterialScripts();