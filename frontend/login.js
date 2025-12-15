const loginForm = document.getElementById("loginForm");
const messageElement = document.getElementById("message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    messageElement.textContent = "Please enter email and password.";
    messageElement.style.color = "#d93025";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    messageElement.textContent = data.message;

    if (response.ok) {
      messageElement.style.color = "#1f9d55";
      localStorage.setItem("loggedInUser", data.email || email);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700);
    } else {
      messageElement.style.color = "#d93025";
    }
  } catch (error) {
    console.error("Login request error:", error);
    messageElement.textContent = "Unable to connect to server.";
    messageElement.style.color = "#d93025";
  }
});
