import React from "react";
import useNews from "../../hooks/useNews";
import newsImg from "../../images/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import "./NewsList.scss";
import { useState } from "react";

const NewsList = () => {
   const [news, setNews] = useNews();
   const [pageNumber, setPageNumber] = useState(0);

   const newsPerPage = 6;
   const pageVisited = pageNumber * newsPerPage;
   const displayNews = news.slice(pageVisited, pageVisited + newsPerPage);
   const pageCount = Math.ceil(news.length / newsPerPage);
   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };

   const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
         const remaining = news.filter((nw) => nw.id !== id);
         setNews(remaining);
      }
   };

   return (
      <div className="news-list">
         {displayNews.map((nw) => (
            <div className="news-box shadow" key={nw.id}>
               <button
                  onClick={() => handleDelete(nw.id)}
                  className="fa-btn btn"
               >
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

export default NewsList;
