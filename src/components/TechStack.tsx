

const skills = [
  "RPA",
  "Microsoft Power Automate",
  "UiPath",
  "Microsoft CoPilot Studio",
  "n8n",
  "Google AI Studio",
  "ServiceNow RPA",
  "MySQL",
];

import "./styles/TechStack.css";

const TechStack = () => {
  return (
    <div className="techstack-section">
      <h2 className="techstack-title">
        My <span>Tech Stack</span>
      </h2>
      <div className="techstack-container">
        {skills.map((skill, index) => (
          <div key={index} className="tech-pill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
