// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const viewBtn = document.querySelector(".btn"); // "View Dashboard" button
  const heroSection = document.querySelector(".hero");
  const ideaSection = document.querySelector(".idea");
  const solutionSection = document.querySelector(".solution");
  const footerSection = document.querySelector(".footer");

  // Create dashboard container
  const dashboard = document.createElement("section");
  dashboard.classList.add("dashboard");
  dashboard.innerHTML = `
    <h2>📊 StuMentor Dashboard</h2>
    <p>Real-time student success monitoring and risk detection</p>
    <div class="dashboard-cards">
      <div class="card hover-card">Total Students: 120</div>
      <div class="card hover-card">At Risk Students: 15</div>
      <div class="card hover-card">Average Attendance: 82%</div>
      <div class="card hover-card">Fee Collection: 95%</div>
    </div>
    <button class="btn back-btn">Back to Home</button>
  `;
  dashboard.style.display = "none"; // hide initially
  document.body.insertBefore(dashboard, ideaSection);

  // Show dashboard
  viewBtn.addEventListener("click", function () {
    heroSection.style.display = "none";
    ideaSection.style.display = "none";
    solutionSection.style.display = "none";
    footerSection.style.display = "none";

    dashboard.style.display = "block";
    dashboard.scrollIntoView({ behavior: "smooth" });
  });

  // Back button
  const backBtn = dashboard.querySelector(".back-btn");
  backBtn.addEventListener("click", function () {
    dashboard.style.display = "none";
    heroSection.style.display = "flex";
    ideaSection.style.display = "block";
    solutionSection.style.display = "block";
    footerSection.style.display = "block";
    heroSection.scrollIntoView({ behavior: "smooth" });
  });

  // ==================
  // Chatbot code here
  // ==================

  const icon = document.getElementById("chatbot-icon");
  const box = document.getElementById("chatbot-box");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  // Toggle open/close
  if (icon) {
    icon.onclick = () => {
      box.style.display = (box.style.display === "flex") ? "none" : "flex";
    };
  }

  // Listen for enter
  if (input) {
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        const msg = e.target.value.trim();
        if (!msg) return;

        // Show user’s message
        messages.innerHTML += `<div><b>You:</b> ${msg}</div>`;

        // Demo reply
       // Demo reply (keyword detection)
setTimeout(() => {
  let reply = "Thanks for your message. (demo reply)";

  const lowerMsg = msg.toLowerCase();
  if (lowerMsg.includes("java")) {
    reply = "☕ Java is widely used for backend, Android apps, and enterprise solutions.";
  } else if (lowerMsg.includes("cpp") || lowerMsg.includes("c++")) {
    reply = "⚡ C++ is great for system programming, game engines, and high-performance apps.";
  } else if (lowerMsg.includes("c#") || lowerMsg.includes("csharp")) {
    reply = "🎯 C# is popular for .NET, Unity game development, and enterprise apps.";
  } else if (lowerMsg === "c") {
    reply = "🔧 C is the foundation of many modern languages, best for low-level programming.";
  }

  messages.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  messages.scrollTop = messages.scrollHeight;
}, 400);


        e.target.value = "";
      }
    });
  }
});