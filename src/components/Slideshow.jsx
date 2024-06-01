import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getLogement } from "../dataretrieval";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';



export default function Carousel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
   

    const logement =props.logement




    const pictures = logement.pictures;

    function previousItem() {
        setActiveIndex(prevActiveIndex => (prevActiveIndex - 1 + pictures.length) % pictures.length);
    }

    function nextItem() {
        setActiveIndex(prevActiveIndex => (prevActiveIndex + 1) % pictures.length);
    }

    return (
        <ul className="carousel">




            {
                pictures.map((picture, index) => (
                    <li key={index}>
                        <figure className={`carouselItem ${index === activeIndex ? "active" : ""}`}>
                            <img className="picture" src={picture} alt={`${logement.title}`} />

                            <FontAwesomeIcon className="btn prev" icon={faChevronLeft} onClick={previousItem} />



<FontAwesomeIcon className="btn next" icon={faChevronRight} onClick={nextItem} />
                            <span className="index">{index+1}/{pictures.length}</span>

                        </figure>
                    </li>
                ))
            }
        </ul>
    )
}


Carousel.propTypes = {
    logement: PropTypes.shape({
      title: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      // Include other properties of logement here...
    }).isRequired,
  };