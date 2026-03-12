import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX(){

document.body.style.overflowY="auto";

if(smoother) smoother.paused(false);

const main=document.querySelector("main");
if(main) main.classList.add("main-active");

/* HERO INTRO */

gsap.from(".landing-intro h2",{
y:40,
opacity:0,
duration:1,
ease:"power3.out"
})

gsap.from(".landing-intro h1",{
y:60,
opacity:0,
duration:1.2,
delay:.2,
ease:"power3.out"
})

/* RIGHT TEXT */

gsap.from(".landing-info h3",{
y:40,
opacity:0,
duration:1,
delay:.4,
ease:"power3.out"
})

gsap.from(".landing-info-h2",{
y:60,
opacity:0,
duration:1.2,
delay:.6,
ease:"power3.out"
})

}