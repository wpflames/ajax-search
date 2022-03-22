<?php
// Shortcode: [my_ajax_filter_search]
function my_ajax_filter_search_shortcode() {
    ob_start(); 

    my_ajax_filter_search_scripts(); // Added here ?>
 
    <div id="my-ajax-filter-search">
        <form action="" method="get">
            <input type="text" name="search" id="search" value="" placeholder="Search Here..">
            
            
            <input type="submit" id="submit" name="submit" value="Search">
        </form>
        <div id="ajax_fitler_search_results" class="cards grid grid-2"></div>
    </div>
     
    <?php
    return ob_get_clean();
}
 
add_shortcode ('my_ajax_filter_search', 'my_ajax_filter_search_shortcode');