<?php

define('AJAX_NONCE', 'theme');
define('REST_NONCE', 'wp_rest');

if (!function_exists('theme_setup'))
{
    function theme_setup()
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
        add_action('wp_enqueue_scripts', 'theme_scripts');

        /**
         * Register menus
         */
        register_nav_menus(array(
            'primary' => esc_html__('Primary', 'theme'),
        ));

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
add_action('after_setup_theme', 'theme_setup');


/**
 * Enqueue scripts and styles.
 */
function theme_scripts()
{
    $base_dir = get_template_directory_uri();
    $ver = '1.0.0';

	wp_enqueue_style('App Style', "{$base_dir}/public/app.css", [], $ver);
    wp_enqueue_script('App', "{$base_dir}/public/app.js", [], $ver, true);
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
