import React from "react";
import java from "../img/java.png";
import springboot from "../img/springboot.png";
import sql from "../img/sql.png";
import kafka from "../img/kafka.png";
import hibernate from "../img/hibernate.png";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import github from "../img/github.png";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Skills <i className="fas fa-tasks"></i>
        </h1>

        <div className="container pt-5 mt-lg-5 justify-content-center row">
          <img
            src={java}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay=""
          />
          <img
            src={springboot}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay=""
          />
          <img
            src={sql}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={kafka}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={hibernate}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
          <img
            src={html}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
          <img
            src={css}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={js}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={github}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
