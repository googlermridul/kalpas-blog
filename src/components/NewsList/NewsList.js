import React from "react";
import useNews from "../../hooks/useNews";
import newsImg from "../../images/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Iframe from "react-iframe";
import "./NewsList.scss";
import { useState } from "react";

const NewsList = () => {
   const [news, setNews] = useNews();
   const [pageNumber, setPageNumber] = useState(0);

   const newsPerPage = 6;
   const pageVisited = pageNumber * newsPerPage;
   const displayNews = news.slice(pageVisited, pageVisited + newsPerPage);
   // const pageCount = Math.ceil(news.length / newsPerPage);
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
         <div className="row">
            {displayNews.map((nw) => (
               <div className="col-12" key={nw.id}>
                  <button
                     onClick={() => handleDelete(nw.id)}
                     className="fa-btn btn"
                  >
                     <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <div
                     className="news-box shadow"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal"
                  >
                     <img className="img-fluid" src={newsImg} alt="" />
                     <div className="text">
                        <h4 className="title">{nw.title.slice(0, 30)}...</h4>
                        <p className="description">{nw.body.slice(0, 170)}</p>
                        <p className="date mb-0">Mon, 21 Dec 2021</p>
                     </div>
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
         <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog modal-xl modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-body">
                     <Iframe
                        url="https://kalpas.in/"
                        width="100%"
                        height="700px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewsList;
