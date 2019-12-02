<?php


function ajax_setup()
{
    /**
     * Register Admin AJAX handlers
     */
    // add_action('wp_ajax_example_submit', 'example_submit_handler');
    // add_action('wp_ajax_nopriv_example_submit', 'example_submit_handler');

    /**
     * Register REST API endpoints
     */
    // add_action('rest_api_init', function() {
    //     $controller = new My_REST_Controller();
    //     return $controller->register_routes();
    // });
}

/**
 * WP admin-ajax action `example_submit`.
 */
function example_submit_handler()
{
    if (!wp_verify_nonce($_REQUEST['nonce'], AJAX_NONCE)) {
        print_r(json_encode(
            [
                'message'   => 'Forbidden',
                'code'      => 403
            ]
        ));

        die();
    };

    // $_POST or $_GET
    $payload = $_REQUEST;

    // Return success with submitted data.
    print_r(json_encode(
        [
            'message'   => 'success',
            'code'      => 200,
            'data'      => $payload
        ]
    ));

    die();
}


/**
 * WP REST API custom endpoints.
 */
class My_REST_Controller extends WP_REST_Controller
{
    public function register_routes()
    {
        $version = '2';
        $namespace = 'message/v' . $version;
        $base = 'greeting';

        // GET /wp-json/message/v2/greeting => { message: "Hello World!" }
        register_rest_route($namespace, $base, [
            'methods'   => 'GET, POST',
            'callback'  => [$this, 'my_callback'],
        ]);
    }


    public function my_callback(WP_REST_Request $request)
    {
        $params = $request->get_json_params();
        $response = [
            'message' => 'Hello World!',
            'payload' => $params,
        ];

        if ($response) {
            return new WP_REST_Response($response, 200);
        } else {
            return new WP_Error(400, 'Nothing Found.');
        }
    }
}
