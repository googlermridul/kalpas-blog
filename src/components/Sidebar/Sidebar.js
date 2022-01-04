import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faListUl } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

const Sidebar = () => {
   return (
      <nav
         id="sidebarMenu"
         className="col-md-4 col-xl-3 d-md-block bg-light sidebar collapse"
      >
         <div className="position-sticky">
            <ul className="nav flex-column">
               <li className="nav-item">
                  <div className="nav-box profile shadow">
                     <img className="img-fluid" src={profile} alt="" />
                     <div className="text">
                        <h4>Hi Elon,</h4>
                        <p className="mb-0">Here's your news!</p>
                     </div>
                  </div>
               </li>
               <li className="nav-item">
                  <div className="nav-box toggler shadow text-center">
                     <h4 className="mb-0">View Toggle</h4>
                     <div className="buttons">
                        <Link to="/newsCard" className="btn active">
                           <FontAwesomeIcon icon={faTh} />
                        </Link>
                        <Link to="/newsList" className="btn">
                           <FontAwesomeIcon icon={faListUl} />
                        </Link>
                     </div>
                  </div>
               </li>
               <li className="nav-item">
                  <div className="nav-box feedback shadow text-center">
                     <h4 className="mb-0">Have a feedback?</h4>
                     <Link to="/feedBack" className="btn">
                        We're listening!
                     </Link>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Sidebar;
