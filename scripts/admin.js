document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("postJobForm");
  const message = document.getElementById("adminMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const location = document.getElementById("location").value.trim();
    const salary = document.getElementById("salary").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!title || !location || !salary || !description) {
      message.textContent = "❌ Please fill all fields.";
      message.style.color = "red";
      return;
    }

    const newJob = { title, location, salary, description };

    let jobList = JSON.parse(localStorage.getItem("jobs")) || [];
    jobList.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobList));

    message.textContent = "✅ Job posted successfully!";
    message.style.color = "green";
    form.reset();
  });
});
