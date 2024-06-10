$(document).ready(function() {
    $('table tbody td').click(function() {
        if ($(this).text() !== 'Not Available') {
            // Toggle the 'selected' class on click
            $(this).toggleClass('selected');
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