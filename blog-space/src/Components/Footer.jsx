import React from "react";
import "../Layouts/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFutbol } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
              
                
                  <FontAwesomeIcon icon={faFutbol} />
                  {" "}
                
              

              
                
                  <FontAwesomeIcon icon={faFutbol} />
                  {" "}
               

              
                
                  <FontAwesomeIcon icon={faFutbol} />
                  
              

              
                
                  <FontAwesomeIcon icon={faFutbol} />
                  {" "}
                
              

              
                
                  <FontAwesomeIcon icon={faFutbol} />
                  {" "}
                
              
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        
          {" "}
          blogspace.com
        
      </div>
    </footer>
  );
}
