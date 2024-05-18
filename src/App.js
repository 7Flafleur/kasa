
import Footer from "./components/Footer"

import Header from "./components/Header"

import {  Routes, Route } from "react-router-dom";

import {Suspense, lazy } from 'react';




const Apropos = lazy(() => import("./components/A_propos"));
const Home = lazy(() => import("./components/Home"));

// const Home = lazy(() => new Promise(resolve => 
//   setTimeout(resolve, 2000)
// ).then(() => import("./components/Home")));

const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Property = lazy(() => import("./components/Property"));


export default function App() {
  return (
    <div className="App">


    <Header/>
    <Suspense fallback={<div className="fallback">Un instant svp...</div>}>
    <Routes>
         
          <Route path="about" element={<Apropos/>} />
          <Route path="/Property/:Id" element={<Property  />} />
          <Route path="/" element={<Home/>} />
          <Route path="/Property/404" element={<PageNotFound/>}/>
          <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </Suspense>
    <Footer/>

    </div >
  );
}

