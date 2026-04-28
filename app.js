// --- Data ---
const projects = [
  {
    title: "AUTODOC",
    description:
      "At AUTODOC, one of Europe's largest online auto parts retailers, I worked on the frontend platform serving 40+ countries." +
      "<ul>" +
      "<li>Built an in-house design system used across multiple teams</li>" +
      "<li>Led the team delivering the production app to 40+ countries, handling hundreds of requests per second</li>" +
      "<li>Decomposed the monolithic frontend into independent Micro-Frontends (MFEs)</li>" +
      "<li>Created shareable tooling and libraries for other developers across the platform</li>" +
      "</ul>",
    link: "https://autodoc.de",
    reaction: "one of my biggest projects to date",
  },
  {
    title: "CORUM L'Epargne subscription funnels",
    description:
      "For CORUM L'Epargne, a leading French financial services company managing significant investor capital." +
      "<ul>" +
      "<li>Developed multiple subscription funnels of high impact for the business, guiding users through product selection, KYC verification, and payment processing</li>" +
      "</ul>",
    link: "https://corumlepargne.fr",
    reaction: "proud to work on this, a lot of money raised from investors",
  },
  {
    title: "OPSIFY (management software)",
    description:
      "OPSIFY was an internal management platform I built for Forall Phones, a circular economy company specializing in smartphone refurbishment." +
      "<ul>" +
      "<li>Built in-house tooling to track phone repairs across the full refurbishment pipeline</li>" +
      "</ul>",
    link: null,
    reaction: "it was a blast working on this one",
  },
  {
    title: "Retake simulator",
    description:
      "A customer-facing tool built at Forall Phones to support the company's mission of promoting phone reuse over replacement." +
      "<ul>" +
      "<li>Built a simulator that evaluates the value of a phone based on its condition, giving consumers an estimation on money back if they wanted to sell or trade in their device</li>" +
      "</ul>",
    link: null,
    reaction:
      "always good to help people get the best value for their used phones",
  },
];

// --- DOM refs ---
const $ = (sel) => document.querySelector(sel);
const winProjects = $("#win-projects");
const winSocial = $("#win-social");
const winGuestbook = $("#win-guestbook");

// --- Visitor counter (randomize on each load) ---
const visitorCount = (Math.floor(Math.random() * 90000) + 10000).toLocaleString(
  "en-US",
  { minimumIntegerDigits: 1 },
);
document
  .querySelectorAll("#visitor-count, .visitor-count-copy, #visitor-digits")
  .forEach((el) => {
    el.textContent = visitorCount;
  });

// --- Clippy (static image + speech bubble) ---
let speechTimeout = null;
const clippyEl = document.createElement("div");
clippyEl.id = "clippy";
clippyEl.innerHTML = `<img src="images/clippy.png" alt="Clippy" draggable="false"><div id="clippy-bubble" class="hidden"></div>`;
document.body.appendChild(clippyEl);

// Make Clippy draggable (mouse + touch)
let dragging = false,
  dragX = 0,
  dragY = 0;
clippyEl.addEventListener("mousedown", (e) => {
  dragging = true;
  dragX = e.clientX - clippyEl.offsetLeft;
  dragY = e.clientY - clippyEl.offsetTop;
});
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  clippyEl.style.left = e.clientX - dragX + "px";
  clippyEl.style.top = e.clientY - dragY + "px";
  clippyEl.style.bottom = "auto";
  clippyEl.style.right = "auto";
});
document.addEventListener("mouseup", () => {
  dragging = false;
});
clippyEl.addEventListener(
  "touchstart",
  (e) => {
    dragging = true;
    const t = e.touches[0];
    dragX = t.clientX - clippyEl.offsetLeft;
    dragY = t.clientY - clippyEl.offsetTop;
  },
  { passive: true },
);
document.addEventListener(
  "touchmove",
  (e) => {
    if (!dragging) return;
    const t = e.touches[0];
    clippyEl.style.left = t.clientX - dragX + "px";
    clippyEl.style.top = t.clientY - dragY + "px";
    clippyEl.style.bottom = "auto";
    clippyEl.style.right = "auto";
  },
  { passive: true },
);
document.addEventListener("touchend", () => {
  dragging = false;
});

function clippySay(msg) {
  const bubble = document.getElementById("clippy-bubble");
  bubble.textContent = msg;
  bubble.classList.remove("hidden");
  clearTimeout(speechTimeout);
  speechTimeout = setTimeout(() => bubble.classList.add("hidden"), 6000);
}

clippySay("Hey! Remember me? I'm here to increase this website's bundle size!");

// --- Window management ---
function showWindow(el) {
  el.classList.remove("hidden");
}
function hideWindow(el) {
  el.classList.add("hidden");
}

// Close buttons
document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const win = $("#" + btn.dataset.close);
    hideWindow(win);
    if (win === winProjects) {
      clippySay("Done checking my projects already?");
    }
  });
});

// Open sub-windows from desktop
document.querySelectorAll("[data-open]").forEach((icon) => {
  const handler = () => {
    // Close all windows first
    [winProjects, winSocial, winGuestbook].forEach((w) => hideWindow(w));
    const win = $("#" + icon.dataset.open);
    showWindow(win);
    if (win === winSocial) {
      clippySay("Please feel free to reach out to me on my social media");
    }
    if (win === winGuestbook) {
      clippySay(
        "WOW look at all these AMAZING reviews from REAL visitors!!! Sign it NOW!!!",
      );
    }
  };
  icon.addEventListener("click", handler);
  icon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler();
    }
  });
});

// Monitor click
$("#monitor").addEventListener("click", () => {
  clippySay(
    "Hey! Remember me? I'm here to increase this website's bundle size!",
  );
});

// --- Projects carousel ---
let projectIdx = 0;

function renderProject() {
  const p = projects[projectIdx];
  $("#project-title").textContent = "Project: " + p.title;
  $("#project-desc").innerHTML = p.description;
  const linkRow = $("#project-link-row");
  const linkEl = $("#project-link");
  if (p.link) {
    linkRow.style.display = "";
    linkEl.href = p.link;
    linkEl.textContent = p.link;
  } else {
    linkRow.style.display = "none";
  }
  const pct = ((projectIdx + 1) / projects.length) * 100;
  $("#project-progress-bar").style.width = pct + "%";
  $("#project-progress").setAttribute("aria-valuenow", Math.round(pct));
  $("#btn-prev").disabled = projectIdx === 0;
  $("#btn-next").disabled = projectIdx === projects.length - 1;
}

$("#btn-prev").addEventListener("click", () => {
  if (projectIdx > 0) {
    projectIdx--;
    renderProject();
    clippySay(
      `You are now looking at ${projects[projectIdx].title}, ${projects[projectIdx].reaction}`,
    );
  }
});

$("#btn-next").addEventListener("click", () => {
  if (projectIdx < projects.length - 1) {
    projectIdx++;
    renderProject();
    clippySay(
      `You are now looking at ${projects[projectIdx].title}, ${projects[projectIdx].reaction}`,
    );
  }
});

renderProject();

// --- Clock ---
function updateClock() {
  $("#clock").textContent = new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

// --- Search ---
$("#btn-search").addEventListener("click", () => {
  const q = $("#search-input").value;
  if (q)
    window.open(
      "https://letmegooglethat.com/?q=" + encodeURIComponent(q),
      "_blank",
    );
});

$("#search-input").addEventListener("focus", () => {
  clippySay(
    "Type something, I gonna help you figure it out with my top-notch-AI-powered search engine",
  );
});

$("#search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("#btn-search").click();
});

// --- Console art ---
function showConsoleArt() {
  console.log(`
████████╗██╗░░██╗░█████╗░███╗░░██╗██╗░░██╗░██████╗  ███████╗░█████╗░██████╗░
╚══██╔══╝██║░░██║██╔══██╗████╗░██║██║░██╔╝██╔════╝  ██╔════╝██╔══██╗██╔══██╗
░░░██║░░░███████║███████║██╔██╗██║█████═╝░╚█████╗░  █████╗░░██║░░██║██████╔╝
░░░██║░░░██╔══██║██╔══██║██║╚████║██╔═██╗░░╚═══██╗  ██╔══╝░░██║░░██║██╔══██╗
░░░██║░░░██║░░██║██║░░██║██║░╚███║██║░╚██╗██████╔╝  ██║░░░░░╚█████╔╝██║░░██║
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝

░█████╗░██╗░░██╗███████╗░█████╗░██╗░░██╗██╗███╗░░██╗░██████╗░  ███╗░░░███╗██╗░░░██╗
██╔══██╗██║░░██║██╔════╝██╔══██╗██║░██╔╝██║████╗░██║██╔════╝░  ████╗░████║╚██╗░██╔╝
██║░░╚═╝███████║█████╗░░██║░░╚═╝█████═╝░██║██╔██╗██║██║░░██╗░  ██╔████╔██║░╚████╔╝░
██║░░██╗██╔══██║██╔══╝░░██║░░██╗██╔═██╗░██║██║╚████║██║░░╚██╗  ██║╚██╔╝██║░░╚██╔╝░░
╚█████╔╝██║░░██║███████╗╚█████╔╝██║░╚██╗██║██║░╚███║╚██████╔╝  ██║░╚═╝░██║░░░██║░░░
░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░  ╚═╝░░░░░╚═╝░░░╚═╝░░░

░██╗░░░░░░░██╗███████╗██████╗░░██████╗██╗████████╗███████╗
░██║░░██╗░░██║██╔════╝██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝
░╚██╗████╗██╔╝█████╗░░██████╦╝╚█████╗░██║░░░██║░░░█████╗░░
░░████╔═████║░██╔══╝░░██╔══██╗░╚═══██╗██║░░░██║░░░██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗██████╦╝██████╔╝██║░░░██║░░░███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝`);

  console.log(
    "%c Are you hiring? Wanna talk? You can find me on LinkedIn!",
    "color: #00ff88; font-size: 16px; font-weight: bold;",
  );

  console.log(
    "%c This website has bundle size in mind and was built to be as small as possible :)",
    "color: #fffb00; font-size: 16px; font-weight: bold;",
  );
}

// --- Console art call ---
showConsoleArt();
