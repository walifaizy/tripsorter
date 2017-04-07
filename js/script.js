$(function () {
    var from_city = $("#from").val();
    var to_city = $("#from").val();

    $("#search_btn").click(function () {
        $.getJSON("data.json", function (data) {
            console.log(data);
            
        });
    });
}); //document ready

//var output = "<ul class='list-group'>";
//            $.each(data, function (key, val) {
//                output += "<li class='list-group-item'>";
//                output += "<h4>" + val.reference + "</h4>";
//                output += "</li>";
//            });
//            output += "</ul>";
//            $("#update").html(output);