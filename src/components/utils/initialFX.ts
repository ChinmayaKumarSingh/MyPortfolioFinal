import gsap from "gsap"
import { smoother } from "../Navbar"

export function initialFX() {

  document.body.style.overflowY = "auto"

  if (smoother) smoother.paused(false)

  const main = document.querySelector("main")
  if (main) main.classList.add("main-active")

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  })

  /* HERO TEXT */

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      y: 0,
      stagger: 0.2,
      delay: 0.3,
    }
  )

  /* SECOND TEXT */

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      y: 0,
      delay: 0.8,
    }
  )

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.3,
    }
  )
}