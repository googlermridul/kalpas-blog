import React from "react";
import useNews from "../../hooks/useNews";
import newsImg from "../../images/news2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NewsCard.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const NewsCard = () => {
   const [news] = useNews();
   const [pageNumber, setPageNumber] = useState(0);

   const newsPerPage = 6;
   const pageVisited = pageNumber * newsPerPage;
   const displayNews = news.slice(pageVisited, pageVisited + newsPerPage);
   // console.log(displayNews);

   const pageCount = Math.ceil(news.length / newsPerPage);
   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <div className="news-card">
         <div className="row">
            {displayNews.map((nw) => (
               <div className="col-md-6 col-lg-4" key={nw.id}>
                  <div className="news-box shadow">
                     <button className="fa-btn btn">
                        <FontAwesomeIcon icon={faTimes} />
                     </button>
                     <div className="text">
                        <h4 className="title">{nw.title.slice(0, 15)}...</h4>
                        <p className="description">{nw.body.slice(0, 85)}</p>
                        <p className="date">Mon, 21 Dec 2021</p>
                     </div>
                     <img className="img-fluid rounded" src={newsImg} alt="" />
                  </div>
               </div>
            ))}
         </div>
         <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={3}
            onPageChange={changePage}
            containerClassName="paginateBtns"
            previousLinkClassName="previousBtn"
            nextLinkClassName="nextBtn"
            disabledClassName="disabledBtn"
            activeClassName="activeBtn"
         />
      </div>
   );
};

export default NewsCard;
