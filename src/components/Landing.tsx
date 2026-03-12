import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">

      <div className="landing-container">

        {/* LEFT SIDE */}

        <div className="landing-intro">
          <h2>Hello! I'm</h2>

          <h1>
            CHINMAYA
            <br />
            <span>SINGH</span>
          </h1>
        </div>

        {/* RIGHT SIDE */}

        <div className="landing-info">

          <h3>A SOFTWARE</h3>

          <h2 className="landing-info-h2">
            DEVELOPER
            <br />
            ENGINEER
          </h2>

        </div>

      </div>

      {children}

    </div>
  );
};

export default Landing;