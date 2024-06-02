import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Gallery(props){

    const logements=props.logements

    return(

        <ul className="gallery">
        {
            logements.map(logement =>(
                <li className="card" key={logement.id}>
                    <Link to={`/property/${logement.id}`}><div className="card_filter"><span className="title">{logement.title}</span></div>
                    <img src={logement.cover} alt={logement.title} />
                        </Link>
                </li>
            ))
        }
        
          </ul>
    )

}


Gallery.propTypes = {
    logements: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        pictures: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        cover: PropTypes.string,
    }))
};