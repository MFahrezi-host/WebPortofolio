/* ============================== 
   1. Typing Animation 
   ============================== */
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Freelancer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ============================== 
   2. Navigasi & Active Section Logic 
   ============================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Loop sidebar
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Delete class 'active' for all section
    for (let j = 0; j < totalSection; j++) {
      allSection[j].classList.remove("active");
    }

    // Delete 'active' for all link sidebar
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // Opsional: Add effect 'back-section'
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    // Add class 'active' to link
    this.classList.add("active");

    // Display the appropriate section
    showSection(this);

    // If on mobile (sidebar closed), close the sidebar after clicking
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

/* ============================== 
   3. Toggle Sidebar (Hamburger Menu) 
   ============================== */
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  // Slide main content if sidebar is open (optional)
  // for(let i=0; i<totalSection; i++) {
  //     allSection[i].classList.toggle("open");
  // }
}

/* ============================== 
   4. Style Switcher 
   ============================== */

// Toggle Panel
document
  .querySelector(".style-switcher-toggler")
  .addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });

// Hide panel
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Change point color
function setActiveStyle(color) {
  document.documentElement.style.setProperty("--skin-color", color);
}

// Dark Mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

// Check mod loading
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
