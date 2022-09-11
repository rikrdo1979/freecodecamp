$(function() {
    $(".toggle").on("click", function() {
        if ($(".nav-link").hasClass("active")) {
            $(".nav-link").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".nav-link").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});