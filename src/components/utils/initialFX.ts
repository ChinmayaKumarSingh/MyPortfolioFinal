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

  /* -------- HERO TEXT -------- */

  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "lines,chars",
      linesClass: "split-line",
    }
  );

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  /* -------- SECOND TEXT -------- */

  const landingText2 = new SplitText(".landing-h2-info", {
    type: "lines,chars",
    linesClass: "split-line",
  });

  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.5,
    }
  );
}