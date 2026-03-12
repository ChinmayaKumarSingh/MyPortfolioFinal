import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function setSplitText() {

  const paras = document.querySelectorAll(".para")
  const titles = document.querySelectorAll(".title")

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%"
  const ToggleAction = "play none none reverse"

  paras.forEach((para: any) => {

    gsap.fromTo(
      para,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    )

  })

  titles.forEach((title: any) => {

    gsap.fromTo(
      title,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    )

  })

}