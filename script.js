// window.addEventListener("load", function () {
//     const loader = document.getElementById("loader");
//     loader.style.display = "none"; // Hide loader when page fully loads
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Page loaded, fetching header...");
  
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            console.log("✅ Header loaded successfully!");
            setTimeout(initializeHeaderScripts, 100); // Ensure elements exist before initializing scripts
        })
        .catch(error => console.error("❌ Error loading header:", error));
  });


  document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("❌ Error loading footer:", error));
  });



