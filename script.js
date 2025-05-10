// Check and apply saved theme on load
document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
  
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  
    // Toggle theme
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
  