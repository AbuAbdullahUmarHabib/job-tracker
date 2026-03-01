let currentTab = "all";
const tabActive = ["btn", "btn-primary"];
const tabInactive = ["btn", "btn-soft"];
const statusInterviewedBtn = [
  "text-green-600",
  "border-green-600",
  "border",
  "bg-green-100",
];
const statusRejectedBtn = [
  "text-red-600",
  "border-red-600",
  "border",
  "bg-red-100",
];
const defaultStatusBtn = ["text-slate-500", "bg-slate-200"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyStat = document.getElementById("empty-stats");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.add(...tabInactive);
      tabName.classList.remove(...tabActive);
    }
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];

  for (const section of pages) {
    section.classList.add("hidden");
  }

  emptyStat.classList.add("hidden");

  if (tab === "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      emptyStat.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptyStat.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptyStat.classList.remove("hidden");
    }
  }
  updateStats();
}

// Stats Update:

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-rejected");
const availableJobs = document.getElementById("available-jobs");

totalStat.innerText = allContainer.children.length;
interviewStat.innerText = interviewContainer.children.length;
rejectStat.innerText = rejectedContainer.children.length;
// availableJobs.innerText = allContainer.children.length;

switchTab(currentTab);

document
  .getElementById("job-container")
  .addEventListener("click", function (e) {
    const clickedEl = e.target;
    const card = clickedEl.closest(".card");
    const cardParent = card.parentNode;
    const status = card.querySelector(".job-status");

    if (clickedEl.classList.contains("interview")) {
      interviewContainer.appendChild(card);
      status.innerText = "Interviewed";
      status.classList.add(...statusInterviewedBtn);
      status.classList.remove(...defaultStatusBtn);

      updateStats();
    }
    if (clickedEl.classList.contains("reject")) {
      rejectedContainer.appendChild(card);
      status.innerText = "Rejected";
      status.classList.add(...statusRejectedBtn);
      status.classList.remove(...defaultStatusBtn);

      updateStats();
    }
    if (clickedEl.classList.contains("delete")) {
      console.log("delete clicked");
      cardParent.removeChild(card);

      updateStats();
    }
  });

function updateStats() {
  const count = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };
  totalStat.innerText = count["all"];
  interviewStat.innerText = count["interview"];
  rejectStat.innerText = count["rejected"];

  availableJobs.innerText = count[currentTab];

  if (count[currentTab] < 1) {
    emptyStat.classList.remove("hidden");
  } else {
    emptyStat.classList.add("hidden");
  }
}
updateStats();
