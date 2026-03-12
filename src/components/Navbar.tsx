import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";

import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {

      let element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {

        if (window.innerWidth > 1024) {

          e.preventDefault();

          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");

          smoother.scrollTo(section, true, "top top");

        }

      });

    });

  }, []);

  return (
    <>
      <div className="header">

        <a href="/#" className="navbar-title">
          CS18
        </a>

        <a
          href="mailto:chinmayasingh.work@gmail.com"
          className="navbar-connect"
        >
          chinmayasingh.work@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;