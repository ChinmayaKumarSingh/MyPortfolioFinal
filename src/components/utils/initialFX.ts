// @ts-ignore
import gsap from "gsap";
// @ts-ignore
import SplitText from "gsap/SplitText";

import { smoother } from "../Navbar";

gsap.registerPlugin(SplitText);

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

  /* ---------------- HERO INTRO TEXT ---------------- */

  const introSplit = new SplitText(
    [".landing-intro h2", ".landing-intro h1", ".landing-info h3"],
    {
      type: "lines,chars",
      linesClass: "split-line",
    }
  );

  gsap.fromTo(
    introSplit.chars,
    {
      opacity: 0,
      y: 80,
      filter: "blur(5px)"
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.02,
      delay: 0.3
    }
  );

  /* ---------------- ENGINEER / DEVELOPER TEXT ---------------- */

  const roleSplit = new SplitText(".landing-info-h2", {
    type: "lines,chars",
    linesClass: "split-line",
  });

  gsap.fromTo(
    roleSplit.chars,
    {
      opacity: 0,
      y: 80,
      filter: "blur(5px)"
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.03,
      delay: 0.6
    }
  );

}