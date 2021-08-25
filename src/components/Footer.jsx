import React from "react";
import { animateScroll } from "react-scroll";

function Footer() {

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: true
    });
  };

  return (
    <footer className="page-footer font-weight-bold pb-lg-0 black">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <div>
              <a className="fb-ic" target="_blank" title="Facebook profile" href="https://www.facebook.com/SainathOmdas" rel="noreferrer">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float"> </i>
              </a>
              <a className="tw-ic" target="_blank" title="Twitter profile" href="https://twitter.com/SainathOmdas"  rel="noreferrer">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float"> </i>
              </a>

              <a className="li-ic" target="_blank" title="Linkedin Profile" href="https://www.linkedin.com/in/sainathomdas/"  rel="noreferrer">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float"> </i>
              </a>
              <a className="ins-ic" target="_blank" title="Instagram profile" href="https://www.instagram.com/sainathomdas/"  rel="noreferrer">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float"> </i>
              </a>
              <a className="github-ic" target="_blank" title="GitHub profile" href="https://github.com/sainathomdas"  rel="noreferrer">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center my-0 pb-4 font-small">
        <hr style={{ backgroundColor: "grey", height: "0px" }} className="pb-0 mb-1" />
        Designed by
        <span className="gold" onClick={() => scrollToTop()} style={{cursor: 'pointer'}}> Sainath Omdas</span>
      </div>
    </footer>
  );
}

export default Footer;
