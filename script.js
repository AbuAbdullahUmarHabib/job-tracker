let total = document.getElementById("total");
let totalInterviewed = document.getElementById("total-interviewed");
let totalRejected = document.getElementById("total-rejected");
let currentStatus = document.querySelectorAll(".current-status");
let availableJobs = document.getElementById("available-jobs");
const jobList = document.getElementById("job-list");

const deleteBtn = document.querySelectorAll(".delete");

function count() {
  total.innerHTML = jobList.children.length;
  availableJobs.innerHTML = jobList.children.length;
}
count();
// delete job
for (del of deleteBtn) {
  del.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    jobCard.remove();
    count();
  });
}

const interviewBtn = document.querySelectorAll(".interview-btn");

for (int of interviewBtn) {
  int.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    const jobStatus = jobCard.querySelector(".job-status");
    const currentStats = jobCard.querySelector(".current-status");

    if (jobStatus.children.length == 0) {
      const newChild = document.createElement("p");
      newChild.innerText = "Interview";
      newChild.classList.add("btn-success", "btn", "btn-outline");
      jobStatus.appendChild(newChild);
      currentStats.classList.add("hidden");
    }
  });
}

const rejectedBtn = document.querySelectorAll(".rejected-btn");

for (rej of rejectedBtn) {
  rej.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    const jobStatus = jobCard.querySelector(".job-status");
    const currentStats = jobCard.querySelector(".current-status");

    if (jobStatus.children.length == 0) {
      const newChild = document.createElement("p");
      newChild.innerText = "Rejected";
      newChild.classList.add("btn-error", "btn", "btn-outline");
      jobStatus.appendChild(newChild);
      currentStats.classList.add("hidden");
    }
  });
}
