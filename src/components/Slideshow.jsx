import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getLogement } from "../dataretrieval";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [logement, setLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const fetchLogement = async () => {                //utiliser variable dans property
            try {
                const data = await getLogement(id);
                setLogement(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLogement();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="carousel">Erreur:{error}</div>;
    }




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


