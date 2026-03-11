import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Amazon */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Amazon</h5>
              </div>

              <h3>Feb 2026 - Present</h3>
            </div>

            <p>
              Building high-availability backend services that power large-scale
              customer experiences. Focused on designing scalable microservices,
              improving system performance, and leveraging AWS for cloud-native
              architectures. Passionate about writing clean and maintainable code
              while solving complex distributed system challenges.
            </p>
          </div>

          {/* Capgemini */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Capgemini</h5>
              </div>

              <h3>Mar 2025 - Feb 2026</h3>
            </div>

            <p>
              Developed scalable backend systems using Java, Spring Boot and
              Microservices architecture. Built enterprise-grade REST APIs,
              collaborated with cross-functional teams, and optimized system
              performance for reliability and scalability.
            </p>
          </div>

          {/* Intel Associate */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Intel Corporation</h5>
              </div>

              <h3>Feb 2024 - Mar 2025</h3>
            </div>

            <p>
              Contributed to backend systems and enterprise applications using
              Spring Boot. Focused on backend development, automation scripts,
              and improving system efficiency while collaborating with engineering
              teams to deliver reliable solutions.
            </p>
          </div>

          {/* Intel Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Intel Corporation</h5>
              </div>

              <h3>Sep 2023 - Feb 2024</h3>
            </div>

            <p>
              Worked on a Satellite Management System by developing backend
              modules, improving real-time data processing, and implementing
              validation and error-handling mechanisms to ensure reliable
              satellite operations.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;