import React, { useEffect } from "react";

function WorkExperience() {
  return (
    <section
      id="work-experience"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="container">
        <h1 className="gold text-center uppercase">
          Work Experience <i className="fas fa-light fa-briefcase"></i>
        </h1>

        <div className="container pt-md-4">
          <ul className="timeline p-4 offset-md-1 col-md-10">
            <li>
              <div data-aos="fade-left">
                <span className="gold card-title">
                  Software Development Engineer II
                </span>
                <div>
                  <small className="gold col-12 col-md-6 pl-0">
                    <i className="fa fa-building mr-1" aria-hidden="true"></i>
                    UST Global
                  </small>
                  <small className="gold col-12 col-md-3 float-md-right">
                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                    July 2022 - Present
                  </small>
                </div>
                <div className="text-white text-justify container">
                  <ul>
                    <li>
                      Design and develop software solutions by gathering
                      requirements from the client
                    </li>
                    <li>
                      Actively participate in planning, tracking and manage
                      deliverables in Agile environment
                    </li>
                    <li>
                      Review code and debug errors to improve performance.
                    </li>
                    <li>
                      Write Junits and Integration tests to test the code
                      written and increase code coverage
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div data-aos="fade-left" delay="500">
                <span className="gold card-title">Java Developer</span>
                <div>
                  <small className="gold col-12 col-md-6 pl-0">
                    <i className="fa fa-building mr-1" aria-hidden="true"></i>
                    Tata Consultancy Services
                  </small>
                  <small className="gold col-12 col-md-3 float-md-right">
                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                    July 2020 - July 2022
                  </small>
                </div>
                <div className="text-white text-justify container">
                  <ul>
                    <li>Lead offshore team seamlessly</li>
                    <li>
                      Participated in requirements gathering and design
                      development meetings
                    </li>
                    <li>
                      Designed and developed product features using primarily
                      Java, Spring Boot, RestEasy and Hibernate
                    </li>
                    <li>
                      Investigated issues and defects to determine problem root
                      cause and formulate corrective action recommendations
                    </li>
                    <li>
                      Collaborated in team-based, Agile environment to
                      accomplish objectives by deadlines
                    </li>
                    <li>
                      Provided KT to testing and production support team after
                      every release.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
