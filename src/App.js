import Apropos from "./components/A_propos"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Header from "./components/Header"
import PageNotFound from "./components/PageNotFound";




import {  Routes, Route } from "react-router-dom";
import Property from "./components/Property";






function App() {
  return (
    <div className="App">


    <Header/>

    <Routes>
         
          <Route path="about" element={<Apropos/>} />
          <Route path="/Property/:Id" element={<Property  />} />
          <Route path="/" element={<Home/>} />
          <Route path="/Property/404" element={<PageNotFound/>}/>
          <Route path="*" element={<PageNotFound/>} />
    </Routes>

    <Footer/>

    </div >
  );
}

export default App;
