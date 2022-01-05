import React from "react";
import hamburger from "../../images/menu.png";
import "./TopHeader.scss";

const TopHeader = () => {
   return (
      <header className="top-header navbar sticky-top fixed-top flex-md-nowrap d-md-none">
         <button
            className="navbar-toggler position-absolute  collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <img className="hamburger" src={hamburger} alt="" />
         </button>
      </header>
   );
};

export default TopHeader;
