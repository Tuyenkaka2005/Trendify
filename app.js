document.addEventListener("DOMContentLoaded", () => {
  const nameLoginForm = document.getElementById("name-login");

  nameLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the username entered by the user
    const userName = document.getElementById("user-name").value.trim();

    if (!userName) {
      alert("Please enter your name");
      return;
    }

    // Optionally, store the username in localStorage for later use
    localStorage.setItem("userName", userName);

    // Redirect to the main interface
    window.location.href = "home.html";
  });
});
