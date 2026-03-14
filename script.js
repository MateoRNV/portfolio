const revealElements = document.querySelectorAll(".reveal");
const spotlight = document.querySelector(".spotlight");
const avatarStage = document.querySelector(".avatar-stage");
const avatarCard = document.querySelector(".avatar-card");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hamburger menu
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

if (!reduceMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));

  window.addEventListener(
    "pointermove",
    (event) => {
      spotlight?.style.setProperty("--spotlight-x", `${event.clientX}px`);
      spotlight?.style.setProperty("--spotlight-y", `${event.clientY}px`);
    },
    { passive: true }
  );

  avatarStage?.addEventListener("pointermove", (event) => {
    const bounds = avatarStage.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width;
    const offsetY = (event.clientY - bounds.top) / bounds.height;
    const tiltX = (offsetX - 0.5) * 10;
    const tiltY = (0.5 - offsetY) * 10;

    avatarCard?.style.setProperty("--tilt-x", `${tiltX}deg`);
    avatarCard?.style.setProperty("--tilt-y", `${tiltY}deg`);
  });

  avatarStage?.addEventListener("pointerleave", () => {
    avatarCard?.style.setProperty("--tilt-x", "0deg");
    avatarCard?.style.setProperty("--tilt-y", "0deg");
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
