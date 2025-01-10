// Menu Toggle
$(".menu-btn").click(function () {
  //  'active' class laai add garcha to the side menu to show it when the menu button is clicked
  $(".side-menu").addClass("active");
});

// Close Menu
$(".menu-close").click(function () {
  //  the 'active' class laai remove garcha from the side menu to hide it when the close button is clicked
  $(".side-menu").removeClass("active");
  // Also resets all submenus and preview images to hidden
  $(".submenu").slideUp(); // Slides up all submenus
  $(".menu-item h3").removeClass("active"); // Removes 'active' class from all menu headings
});

// Submenu Toggle with Preview Images
$(".menu-item h3").click(function () {
  const $this = $(this); // Current menu heading element
  const $submenu = $this.next(".submenu"); // Next sibling element is the submenu
  const images = $this.data("images"); // Fetching images stored in the 'data-images' attribute

  // Toggle submenu visibility with slide animation
  $submenu.slideToggle();
  $this.toggleClass("active"); // Toggle 'active' class on the menu heading

  // Update the preview image if available
  if (images && images.length > 0) {
    $(".preview-image").attr("src", images[0]); // Change the preview image to the first image in the array
  }
});

// Navbar Background on Scroll
$(window).scroll(function () {
  // Adds a class to the navbar when the page is scrolled more than 50px
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

// Smooth Scroll
$(".scroll-indicator").click(function () {
  // Smoothly scroll to the 'about' section when the scroll indicator is clicked
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top, // Scroll to the top of the 'about' section
    },
    800
  ); // Duration of the scroll animation in milliseconds
});
