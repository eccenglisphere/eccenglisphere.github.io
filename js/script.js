document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("loginError");

      if (username === "rizky" && password === "rizky123") {
        window.location.href = "https://eccenglisphere.github.io/dasbor-rizky.html";
      } else if (username === "andy" && password === "andy123") {
        window.location.href = "dasbor-andy.html";
      } else {
        errorMsg.textContent = "Username atau password salah.";
      }
    });
  }
});
