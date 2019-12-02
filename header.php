<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>

    <script>
        var appData = <?= json_encode([
            'LOGGED_IN'     => is_user_logged_in(),
            'SITE_URL'      => get_site_url(),
            'AJAX_URL'      => admin_url('admin-ajax.php'),
            'REST_URL'      => get_rest_url(),
            'BASE_DIR'      => get_template_directory_uri(),
            'AJAX_NONCE'    => wp_create_nonce(AJAX_NONCE),
            'REST_NONCE'    => wp_create_nonce(REST_NONCE),
            'LANG'          => function_exists('pll_current_language')
                                ? pll_current_language('slug')
                                : null
        ]) ?>
    </script>
</head>
<body <?php body_class(); ?>>

<noscript>
    We're sorry but this site doesn't work properly without JavaScript enabled.
    Please enable it to continue.
</noscript>
