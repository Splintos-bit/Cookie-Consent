// Wait for the DOM content to load before executing script
document.addEventListener("DOMContentLoaded", function() {
    // Check if the cookie consent has been accepted
    if (!localStorage.getItem("cookieConsent")) {
      // Show the cookie banner if consent has not been given
      const banner = document.getElementById("cookie-banner");
      const acceptButton = document.getElementById("accept-btn");
  
      // Show the banner
      banner.style.display = "flex";
  
      // Add event listener for the "Accept" button
      acceptButton.addEventListener("click", function() {
        // Save user consent in localStorage so we don't show the banner again
        localStorage.setItem("cookieConsent", "accepted");
  
        // Hide the banner after user accepts
        banner.style.display = "none";
      });
    }
  });
  