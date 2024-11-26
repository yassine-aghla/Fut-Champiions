// Collapse FAQ
$(document).ready(function () {
    // Toggle the FAQ answer on question click
    $(".faq-question").click(function () {
      const answer = $(this).next(".faq-answer");
      answer.slideToggle(); // Slide up/down for smooth transition
      $(this)
        .find(".toggle-icon")
        .text($(this).find(".toggle-icon").text() === "+" ? "−" : "+"); // Change icon
    });
  });