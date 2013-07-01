function createTableFromJson(json) {
    var table = "<table><tr>";
    $.each(json.results[0], function(key, value) {
        table += "<th>" + key + "</th>";
    });
    table += "</tr>";
    $.each(json.results, function(key, value) {
        table += "<tr>";
        $.each(value, function(k, v) {
            table += "<td>" + v + "</td>";
        });
        table += "</tr>";
    });
    table += "</table>";
    return table;
}

$(function() {

$.getJSON("demo.json", function(data) {
        $("#table").append(createTableFromJson(data));
    });

//pull from jsoninfo (demo is twitter json)
//    $.getJSON("http://search.twitter.com/search.json?callback=?&rpp=5&q=from:abditum", function(data) {
//        $("#table").append(createTableFromJson(data));
//    });


});