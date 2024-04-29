import "./App.css";
import { Component } from "react";
import NavBar from "./component/navbar.js";
import React from "react";
import Footer from "./component/footer.jsx";
import News from "./component/news.js";

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

export default class App extends Component {
  // c = 'nik'
  render() {
    return (
   
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News  key="general"  pageSize={6} country="in" category=""/>} />
            <Route exact path="/business"  element={<News key="business"  pageSize={6} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<News  key="general" pageSize={6} country="in" category="general"/>} />
            <Route exact path="/health" element={<News key="health"  pageSize={6} country="in" category="health"/>} />
            <Route exact path="/science" element={<News  key="science" pageSize={6} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News  key="sports" pageSize={6} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News  key="technology" pageSize={6} country="in" category="technology"/>} />
            
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }
}
