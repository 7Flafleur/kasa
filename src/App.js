import Apropos from "./components/A_propos"
import Card from "./components/Card";
import CardsList from "./components/CardsList"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Header from "./components/Header"
import PageNotFound from "./components/PageNotFound";



import {  Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import img1 from "./assets/Image source 1.png"



function App() {
  return (
    <div className="App">


    <Header/>

    <Routes>
          <Route path="banner" element={<Banner img={img1}/>}/>
          <Route path="about" element={<Apropos/>} />
          <Route path="cardslist" element={<CardsList/>}>
          <Route path=":Id" element={<Card/>} />
          </Route>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<PageNotFound/>} />
    </Routes>

    <Footer/>

    </div >
  );
}

export default App;
