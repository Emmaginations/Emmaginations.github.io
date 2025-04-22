$(document).ready(function () {
    setTimeout(function () {
      $("#slide1").fadeIn(500); // 1000 ms = 1 second
    }, 1000); // Wait 2 seconds before sliding up
});

$(document).ready(function () {
   setTimeout(function () {
    $("#slide2").fadeIn(500); // 1000 ms = 1 second
   }, 2000); // Wait 2 seconds before sliding up
});

$(document).ready(function () {
   setTimeout(function () {
     $("#slide3").fadeIn(500); // 1000 ms = 1 second
   }, 3000); // Wait 2 seconds before sliding up
});

$(document).ready(function () {
    setTimeout(function () {
      $("#slide4").fadeIn(500); // 1000 ms = 1 second
    }, 4000); // Wait 2 seconds before sliding up
});

$(document).ready(function () {
    // Hide all toggle-content blocks initially
    $(".toggle-content").hide();
  
    // Add click handler to each header
    $(".toggle-header").on("click", function () {
      $(this).next(".toggle-content").slideToggle(500); // Slide down/up the content
    });
});

$(function() {
    const reasons = [
        "Software Engineering",
        "Front-end Development",
        "Full-stack Development",
        "Internship Opportunity",
        "Employment Opportunity",
        "Graphic Design",
        "UX Design",
        "Lindy Hop Instructor",
    ]

    $("#interestInput").autocomplete({
        source: reasons,
        minLength: 1
    });
});

