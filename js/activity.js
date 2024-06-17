$(document).ready(function() {
    // Get the cliff site names from the table headers
    var cliffSites = [];
    $('table thead th').each(function(index) {
        if (index > 0) { // Skip the first header which is 'Activity'
            cliffSites.push($(this).text());
        }
    });

    $('table tbody td').click(function() {
        var content = $(this).text();
        var columnIndex = $(this).index(); // Get the index of the column
        var cliffSiteName = cliffSites[columnIndex - 1]; // Get the corresponding cliff site name
        
        if (content !== 'Not Available') {
            // add or remove the 'selected' class when cell is selected
            $(this).toggleClass("selected");

            if($(this).hasClass("selected")) {
                $('#displaySelected').css("visibility","visible"); // make display box visible
                $('#displaySelected').css("margin-top","2em"); // add spaces above box
                $('#result').append("<p>" +content + " at " + cliffSiteName + "</p>"); // add child element with cliff site and activity
            } else { // if selected cell doesn't have class
                $('#result p:contains('+cliffSiteName+'" at " '+content+')').remove(); // remove child element

                if($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility","hidden");
                    $('#displaySelected').css("margin-top","0");
                }
            }
        }
    });

    $('table tbody td').hover(function() {
        if ($(this).text() !== 'Not Available') {
            $(this).css('cursor', 'pointer');
        }
    }, function() {
        $(this).css('cursor', 'default');
    });
});