import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {

  document.body.style.overflowY = "auto";

  if (smoother) smoother.paused(false);

  const main = document.querySelector("main");
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  /* HERO TEXT */

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.2,
    }
  );

  /* DEVELOPER TEXT */

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.6,
    }
  );

  /* HEADER */

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    }
  );
}