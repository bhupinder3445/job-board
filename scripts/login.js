document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  const validUser = "admin";
  const validPass = "admin123";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === validUser && password === validPass) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "post-job.html";
    } else {
      message.textContent = "❌ Invalid username or password";
      message.style.color = "red";
    }
  });
});
