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
				'key' => 'xo_scripts_body',
				'label' => 'Body',
				'name' => 'xo_scripts_body',
				'type' => 'repeater',
				'layout' => 'block',
				'button_label' => 'Add Body Content',
				'sub_fields' => array(
					array(
						'key' => 'xo_scripts_body_content',
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
					'value' => 'theme-options'
				)
			)
		)
	));
});

class XoMaterialScripts
{
	function __construct() {
		add_action('wp_head', array($this, 'RenderWpHead'), 10, 0);
		add_action('wp_body', array($this, 'RenderWpBody'), 10, 0);
		add_action('wp_footer', array($this, 'RenderWpFooter'), 10, 0);
	}

	public function RenderWpHead() {
		$this->RenderContents(get_field('xo_scripts_head', 'option'));
	}

	public function RenderWpBody() {
		$this->RenderContents(get_field('xo_scripts_body', 'option'));
	}

	public function RenderWpFooter() {
		$this->RenderContents(get_field('xo_scripts_footer', 'option'));
	}

	private function RenderContents($contents) {
		if ((empty($contents)) || (!is_array($contents)))
			return;

		foreach ($contents as $content) {
			if (!empty($content['content']))
				echo $content['content'];
		}
	}
}
new XoMaterialScripts();