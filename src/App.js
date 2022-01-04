import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound.js/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import TopHeader from "./components/TopHeader/TopHeader";
import NewsList from "./components/NewsList/NewsList";
import NewsCard from "./components/NewsCard/NewsCard";
import FeedBack from "./components/Feedback/FeedBack";

function App() {
   return (
      <>
         <Router>
            <div className="container-fluid top-box">
               <TopHeader />
               <div className="row main-row">
                  <Sidebar />
                  <main className="col-md-8 col-xl-9 ms-sm-auto main">
                     <Switch>
                        <Route exact path="/">
                           <Home />
                        </Route>
                        <Route path="/home">
                           <Home />
                        </Route>
                        <Route path="/newsList">
                           <NewsList />
                        </Route>
                        <Route path="/newsCard">
                           <NewsCard />
                        </Route>
                        <Route path="/feedBack">
                           <FeedBack />
                        </Route>
                        <Route path="*">
                           <NotFound />
                        </Route>
                     </Switch>
                  </main>
               </div>
            </div>
         </Router>
      </>
   );
}

export default App;
