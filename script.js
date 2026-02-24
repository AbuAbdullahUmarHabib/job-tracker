let total = document.getElementById("total");
let totalInterviewed = document.getElementById("total-interviewed");
let totalRejected = document.getElementById("total-rejected");
let currentStatus = document.querySelectorAll(".current-status");
let availableJobs = document.getElementById("available-jobs");
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const jobList = document.getElementById("job-list");
const noJob = document.getElementById("no-job");

let interviewCount = [];
let rejectedCount = [];

const deleteBtn = document.querySelectorAll(".delete");

const allCards = jobList.querySelectorAll(".card");

function updateCounts(n) {
  const currentCards = jobList.querySelectorAll(".card");
  const totalJobs = allCards.length;
  total.innerHTML = currentCards.length;
  if (n !== undefined) {
    availableJobs.innerText = `${n} of ${totalJobs} jobs`;
  } else {
    availableJobs.innerText = `${currentCards.length} jobs`;
  }
}
updateCounts();
// delete job
for (del of deleteBtn) {
  del.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    interviewCount = interviewCount.filter((c) => c !== jobCard);
    rejectedCount = rejectedCount.filter((c) => c !== jobCard);
    totalInterviewed.innerText = interviewCount.length;
    totalRejected.innerText = rejectedCount.length;
    jobCard.remove();
    updateCounts();
  });
}

const interviewBtn = document.querySelectorAll(".interview-btn");

function setJobStatus(jobCard, newStatus) {
  const jobStatus = jobCard.querySelector(".job-status");
  const currentStats = jobCard.querySelector(".current-status");
  const existingBadge = jobStatus.querySelector("p");
  const currentLabel = existingBadge ? existingBadge.innerText.trim() : null;

  // Toggle off if clicking the same status
  if (currentLabel === newStatus) {
    existingBadge.remove();
    currentStats.classList.remove("hidden");

    interviewCount = interviewCount.filter((c) => c !== jobCard);
    rejectedCount = rejectedCount.filter((c) => c !== jobCard);
  } else {
    // Remove old status from counts if switching
    if (currentLabel === "Interview") {
      interviewCount = interviewCount.filter((c) => c !== jobCard);
    } else if (currentLabel === "Rejected") {
      rejectedCount = rejectedCount.filter((c) => c !== jobCard);
    }

    // Clear and set new badge
    jobStatus.innerHTML = "";
    const newChild = document.createElement("p");
    newChild.innerText = newStatus;

    if (newStatus === "Interview") {
      newChild.classList.add("btn-success", "btn", "btn-outline");
      interviewCount.push(jobCard);
    } else {
      newChild.classList.add("btn-error", "btn", "btn-outline");
      rejectedCount.push(jobCard);
    }

    jobStatus.appendChild(newChild);
    currentStats.classList.add("hidden");
  }

  totalInterviewed.innerText = interviewCount.length;
  totalRejected.innerText = rejectedCount.length;
  updateCounts();
}

for (int of interviewBtn) {
  int.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    setJobStatus(jobCard, "Interview");
  });
}

const rejectedBtn = document.querySelectorAll(".rejected-btn");

for (rej of rejectedBtn) {
  rej.addEventListener("click", function (e) {
    const jobCard = e.target.parentNode.parentNode.parentNode.parentNode;
    setJobStatus(jobCard, "Rejected");
  });
}

function toggleFilter(id) {
  allFilterBtn.classList.add("bg-white-500", "text-black");
  interviewFilterBtn.classList.add("bg-white-500", "text-black");
  rejectedFilterBtn.classList.add("bg-white-500", "text-black");

  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

  const selected = document.getElementById(id);

  currentFilter = id;
  console.log(currentFilter);

  selected.classList.remove("bg-white-500", "text-black");
  selected.classList.add("bg-blue-500", "text-white");
}

// Filter buttons handlers

function showFilter(filter) {
  noJob.classList.add("hidden");

  Array.from(allCards).forEach((card) => {
    const badge = card.querySelector(".job-status p");
    const status = badge ? badge.innerText.trim() : null;

    if (filter === "all") {
      card.classList.remove("hidden");
    } else if (filter === "interview") {
      card.classList.toggle("hidden", status !== "Interview");
    } else if (filter === "rejected") {
      card.classList.toggle("hidden", status !== "Rejected");
    }
  });

  if (filter === "interview" && interviewCount.length === 0) {
    jobList.classList.add("hidden");
    noJob.classList.remove("hidden");
  } else if (filter === "rejected" && rejectedCount.length === 0) {
    jobList.classList.add("hidden");
    noJob.classList.remove("hidden");
  } else {
    jobList.classList.remove("hidden");
  }
}

allFilterBtn.addEventListener("click", function () {
  showFilter("all");
  updateCounts();
});

interviewFilterBtn.addEventListener("click", function () {
  showFilter("interview");
  updateCounts(interviewCount.length);
});

rejectedFilterBtn.addEventListener("click", function () {
  showFilter("rejected");
  updateCounts(rejectedCount.length);
});
