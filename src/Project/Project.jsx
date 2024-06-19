import React, { useState } from "react";
import "../Project/Project.css";
const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      
      <div
        className="Project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
       
          {show ? (
            <div className="Project__hove">
              <h4>{title}</h4>
              <h2>{desc}</h2>
            </div>
          ) : (
            
            <img src={img} alt="" />
          )}
        
      </div>
    </a>
  );
};

export default Project;
