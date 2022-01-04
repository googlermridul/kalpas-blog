import { useEffect, useState } from "react";

const useNews = () => {
   const [news, setNews] = useState([]);
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res) => res.json())
         .then((data) => {
            setNews(data);
         });
   }, []);

   return [news, setNews];
};

export default useNews;
