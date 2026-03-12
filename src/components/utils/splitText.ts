import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function setSplitText() {

  const titles = document.querySelectorAll(".title");
  const paras = document.querySelectorAll(".para");

  titles.forEach((title: any) => {

    const split = new SplitText(title, {
      type: "chars,words",
    });

    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "power3.out"
    });

  });

  paras.forEach((para: any) => {

    const split = new SplitText(para, {
      type: "lines",
    });

    gsap.from(split.lines, {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out"
    });

  });

}