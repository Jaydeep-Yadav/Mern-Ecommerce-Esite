import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Webfont from "webfontloader";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from './component/Home/Home.jsx';

function App() {
  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto","Droid Sans","Chilanka"],
      },
    })
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
