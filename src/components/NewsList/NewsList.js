import React from "react";
import useNews from "../../hooks/useNews";
import newsImg from "../../images/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NewsList.scss";
import { useState } from "react";

const NewsList = () => {
   const [news] = useNews();
   const [pageCount, setPageCount] = useState(0);

   return (
      <div className="news-list">
         {news.slice(0, 3).map((nw) => (
            <div className="news-box shadow" key={nw.id}>
               <button className="fa-btn btn">
                  <FontAwesomeIcon icon={faTimes} />
               </button>
               <img className="img-fluid" src={newsImg} alt="" />
               <div className="text">
                  <h4 className="title">{nw.title.slice(0, 30)}...</h4>
                  <p className="description">{nw.body.slice(0, 170)}</p>
                  <p className="date mb-0">Mon, 21 Dec 2021</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default NewsList;
