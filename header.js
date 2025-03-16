function initializeHeaderScripts() {
  console.log("✅ Initializing header scripts...");

  const header = document.getElementById("header");
  const contactBar = document.getElementById("contact-bar");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!header || !contactBar || !menuBtn || !mobileMenu || !menuIcon || !closeIcon) {
      console.error("❌ Missing elements in the header! Check header.html structure.");
      return;
  }

  // ✅ Scroll Event - Sticky Header + Background Image
let scrollTimeout; // Store timeout reference

window.addEventListener("scroll", function () {
    let imagePath = "dist/Hero-bg_upscayl_2x_realesrgan-x4plus-scaled.webp"; // Relative path from index.html or header.js

    if (window.scrollY > 50) {
        header.classList.add("fixed", "top-0", "shadow-lg", "bg-cover", "bg-center");
        header.classList.remove("absolute", "bg-transparent");
        header.style.backgroundImage = `url('${imagePath}')`; // Set background dynamically
        contactBar.classList.add("hidden");
    } else {
        header.classList.remove("fixed", "top-0", "shadow-lg", );
        header.classList.add("absolute", "bg-transparent");
        header.style.backgroundImage = ""; // Remove background
        contactBar.classList.remove("hidden");
    }
});

  // ✅ Mobile Menu Toggle
  menuBtn.addEventListener("click", function () {
      console.log("📌 Menu button clicked!");
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
  });

  console.log("✅ Header scripts initialized successfully!");
}
