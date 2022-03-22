<?php

// Scripts for Ajax Filter Search
 
function my_ajax_filter_search_scripts() {
    wp_enqueue_script( 'ajax_jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js', array(), '2.2.2', true );
    wp_enqueue_script( 'my_ajax_filter_search', get_stylesheet_directory_uri(). '/components/ajax/assets/js/script.js', array(), '1.0', true );
    wp_localize_script( 'my_ajax_filter_search', 'ajax_url', admin_url('admin-ajax.php') );
}




include('inc/ajax-filter.php');
include('inc/ajax-callback.php');