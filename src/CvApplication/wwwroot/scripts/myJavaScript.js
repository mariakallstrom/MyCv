$(document).ready(function () {


    $("#greenBox").on('mouseover', function () {
        $(this).css("background", "#006600");
    });
    $("#greenBox").on('mouseout', function () {
        $(this).css("background", "#11A355");
    });

    $("#blueBox").on('mouseover', function () {
        $(this).css("background", "#3399ff");
    });
    $("#blueBox").on('mouseout', function () {
        $(this).css("background", "lightskyblue");
    });

    $("#yellowBox").on('mouseover', function () {
        $(this).css("background", "#e6e600");
    });
    $("#yellowBox").on('mouseout', function () {
        $(this).css("background", "#ffff80");
    });

    $("#redBox").on('mouseover', function () {
        $(this).css("background", "#b32d00");
    });
    $("#redBox").on('mouseout', function () {
        $(this).css("background", "#ff4d4d");
    });

    $("#orangeBox").on('mouseover', function () {
        $(this).css("background", "#e67300");
    });
    $("#orangeBox").on('mouseout', function () {
        $(this).css("background", "orange");
    });

    $("#pinkBox").on('mouseover', function () {
        $(this).css("background", "#ff80ff");
    });
    $("#pinkBox").on('mouseout', function () {
        $(this).css("background", "pink");
    });

    $(".top-banner").on("mouseover", function () {
        $(this).css("background", "	#666666");
    });
    $(".top-banner").on("mouseout", function () {
        $(this).css("background", "#969698");
    });

});