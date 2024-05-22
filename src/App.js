
import Footer from "./components/Footer"

import Header from "./components/Header"

import {  Routes, Route } from "react-router-dom";

import {Suspense, lazy } from 'react';




const Apropos = lazy(() => import("./pages/A_propos"));
const Home = lazy(() => import("./pages/Home"));



const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Property = lazy(() => import("./pages/Property"));


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

