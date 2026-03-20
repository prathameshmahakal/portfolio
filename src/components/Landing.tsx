import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2 className="landing-gradient-text">Hello! I'm</h2>
            <h1 style={{ color: "white", marginTop: "10px" }}>
              PRATHAMESH
              <br />
              <span>MAHAKAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-gradient-text">An AI Automation Enthusiast</h3>
            <h2 style={{ color: "white", display: "block", marginTop: "10px", marginLeft: "0" }}>RPA Developer Specialist</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
