<?php

define('AJAX_NONCE', 'mytheme');
define('REST_NONCE', 'wp_rest');

if (!function_exists('mytheme_setup'))
{
    function mytheme_setup()
    {
        add_theme_support('post-thumbnails');
        add_theme_support('title-tag');

        /**
         * Remove wordpress added default script/style
         */
		remove_action('wp_head', 'print_emoji_detection_script', 7);
		remove_action('wp_print_styles', 'print_emoji_styles');

        /**
         * Actions
         */
        add_action('wp_enqueue_scripts', 'mytheme_scripts');

        /**
         * Image sizes
         */
        add_image_size('full-HD', 1920, 1080, true);
        add_image_size('low-res-placeholder', 130);

        /**
         * Setup Advanced Custom Fields.
         */
        acf_setup();

        /**
         * Setup WP ajax.
         */
        ajax_setup();
	}
}
add_action('after_setup_theme', 'mytheme_setup');


/**
 * Enqueue scripts and styles.
 */
function mytheme_scripts()
{
    $base_dir = get_template_directory_uri();

	// wp_enqueue_style('mystyle', 'MY_URL', false);
    // wp_enqueue_script('myscript', 'MY_URL', [], '1.0.0', true);
}


/**
 * Include ACF setup function and utils.
 */
require get_template_directory() . '/inc/acf.php';

/**
 * Include Polylang translations and utils.
 */
require get_template_directory() . '/inc/polylang.php';

/**
 * Include WP ajax and WP REST endpoints and handlers.
 */
require get_template_directory() . '/inc/ajax.php';
