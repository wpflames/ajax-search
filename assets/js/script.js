$ = jQuery;
 
var mafs = $("#my-ajax-filter-search"); 
var mafsForm = mafs.find("form"); 
 
mafsForm.submit(function(e){
    e.preventDefault(); 
 
    //console.log("form submitted");
    
    if(mafsForm.find("#search").val().length !== 0) {
        var search = mafsForm.find("#search").val();
    }

    var data = {
        action : "my_ajax_filter_search",
        search : search
    }

    // we will add codes above this line later
    
    
//jQuery Ajax Function
$.ajax({
        url : ajax_url,
        data : data,
        success : function(response) {
            mafs.find("#ajax_fitler_search_results").empty();
            if(response) {
                for(var i = 0 ;  i < response.length ; i++) {
                    var position = response[i].position;
                    var media = response[i].position;
                     var html  = "<div class='card " + "id-" + response[i].id + "'>";

                         html += "      <header><h3>" + response[i].title + "</h3></header>";
                         if (position !== null) { 
                            html += "          <p class='position'>" + position + "</p>";
                         }
                         html += "      <ul class='card-content'>";
                         html += "          <li><strong>Year:</strong> " + response[i].year + "</li>";
                         html += "          <li><strong>Status:</strong> " + response[i].status + "</li>";
                         html += "          <li><strong>Field:</strong> " + response[i].field + "</li>";
                         
                         if (media !== null) { 
                            html += "          <li><strong>Media:</strong> " + media + "</li>";
                         }
                         
                         html += "          <li><strong>Home institution:</strong> " + response[i].home_institution + "</li>";
                         html += "          <li><strong>Host institution:</strong> " + response[i].host_institution + "</li>";
                         html += "      </ul>";
                         html += "</div>";
                     mafs.find("#ajax_fitler_search_results").append(html);
                }
            } else {
                var html  = "<li class='no-result'>No matching movies found. Try a different filter or search keyword</li>";
                mafs.find("ul").append(html);
            }
        } 
    });
    
});



