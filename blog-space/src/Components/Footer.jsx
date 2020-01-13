import React from "react";
import "../Layouts/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <div className="footerContainer">
        
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
              />{" "}
              <FontAwesomeIcon
                icon={faTwitter}
                className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
              />{" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
              />{" "}
              
            </div>
         
        </div>
      </div>

      <p className="footer-copyright text-center py-3">
        © 2020 Copyright: blogspace.com
      </p>
    </footer>
  );
}
