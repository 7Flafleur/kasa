import { useParams } from "react-router-dom"
import { useState } from "react";
import { getLogement } from "../dataretrievalfunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default function Carousel(){

    const [activeIndex, setActiveIndex] =useState(0);

    const {Id} =useParams();

    const logement= getLogement(Id);


const pictures=logement.pictures;

function previousItem() {
    setActiveIndex(prevActiveIndex => prevActiveIndex - 1 < 0 ? pictures.length - 1 : prevActiveIndex - 1);
  }

  function nextItem() {
    setActiveIndex(prevActiveIndex => (prevActiveIndex + 1) % pictures.length);
  }

    return(
        <ul className="carousel">
            
            
            <FontAwesomeIcon className="btn prev" icon={faChevronLeft} onClick={previousItem} />
                
         
                
                <FontAwesomeIcon className="btn next" icon={faChevronRight} onClick={nextItem} />
             

    {
        pictures.map((picture,index)=>(
            <li key={index}>
                <figure className={`carouselItem ${index === activeIndex ? "active" : ""}`}>
                    <img className="picture" src={picture} alt={`${logement.title}`} />
    
                </figure>
            </li>
        ))
    }
            </ul>
    )
}


