<?php
/**
 * Setup ACF options page and JSON export.
 */
function acf_setup()
{

    /**
     * Export ACF field group JSON on save to `/acf` folder.
     */
    function acf_json_save_point($path)
    {
        $path = get_stylesheet_directory() . '/acf';

        return $path;
    }
    add_filter('acf/settings/save_json', 'acf_json_save_point');


    /**
     * IIFE for ACF options page. Requires ACF PRO.
     */
    (function()
    {
        if (function_exists('acf_add_options_page')) {
            $parent = acf_add_options_page([
                'page_title' => 'Theme Options',
                'menu_title' => 'Theme Options',
                'redirect'   => 'Theme Options',
            ]);

            acf_add_options_sub_page([
                'page_title' => 'Theme Options',
                'menu_title' => 'Theme Options',
                'menu_slug'  => 'theme-options',
                'parent'     => $parent['menu_slug']
            ]);

            $languages = [];

            foreach ($languages as $lang) {
                $slug_upper = strtoupper($lang);

                acf_add_options_sub_page([
                    'page_title' => "Theme Options {$slug_upper}",
                    'menu_title' => "Theme Options {$slug_upper}",
                    'menu_slug'  => "theme-options-{$lang}",
                    'post_id'    => "options-{$lang}",
                    'parent'     => $parent['menu_slug']
                ]);
            }
        }
    })();
}


/**
 * Get field from acf registered options page
 */
function get_options_field($field, $translated = true)
{
    $lang = function_exists('pll_current_language') ? pll_current_language('slug') : null;

    return get_field($field, $translated && $lang ? "options-{$lang}" : 'options');
}
