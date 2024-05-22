import PropTypes from 'prop-types';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carousel({ logement }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const pictures = logement.pictures;

    function previousItem() {
        setActiveIndex(prevActiveIndex => prevActiveIndex - 1 < 0 ? pictures.length - 1 : prevActiveIndex - 1);
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
                            <span className="index">{index + 1}/{pictures.length}</span>
                        </figure>
                    </li>
                ))
            }
        </ul>
    )
}

Carousel.propTypes = {
  logement: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Carousel;