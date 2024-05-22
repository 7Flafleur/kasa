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

    const { Id } = useParams();


    useEffect(() => {
        const fetchLogement = async () => {                //utiliser variable dans property
            try {
                const data = await getLogement(Id);
                setLogement(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLogement();
    }, [Id]);

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


            <FontAwesomeIcon className="btn prev" icon={faChevronLeft} onClick={previousItem} />



            <FontAwesomeIcon className="btn next" icon={faChevronRight} onClick={nextItem} />


            {
                pictures.map((picture, index) => (
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


