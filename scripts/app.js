document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applyForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const resumeInput = document.getElementById("resume");

      if (!name || !email) {
        message.textContent = "❌ Please fill all fields.";
        message.style.color = "red";
        return;
      }

      if (resumeInput.files.length === 0) {
        message.textContent = "❌ Please upload your resume file.";
        message.style.color = "red";
        return;
      }

      const resumeFile = resumeInput.files[0];
      const allowedTypes = ["application/pdf", 
                            "application/msword", 
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

      if (!allowedTypes.includes(resumeFile.type)) {
        message.textContent = "❌ Only PDF or Word documents allowed.";
        message.style.color = "red";
        return;
      }

      // For demo, just show success message (no actual upload)
      message.textContent = `✅ Application submitted! Resume file "${resumeFile.name}" received.`;
      message.style.color = "green";

      form.reset();
    });
  }
});
