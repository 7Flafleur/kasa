
import Carousel from "./Slideshow"

import { useNavigate } from "react-router-dom";
import Collapse from "./Collapse";
import { Star } from "./Star";
import Tag from "./Tag";
import { useEffect } from "react";
import PropTypes from 'prop-types';
 




export default function Property(props) {

  const navigate = useNavigate();

  const logement = props.logement;


  // gérer cote asynchrone

  useEffect(() => {
    
    if (logement === undefined) {
      navigate("/Property/404");
    }
  }, [logement]);

  if (logement === undefined) {
    return null;
  }



  const equipements = logement.equipments.map(equipement => equipement)



  const tags = logement.tags;

  const rating = logement.rating;

  return (
    <div className="property">
      <Carousel logement={logement} />
      <div className="property_infos">
        <div className="left">
          <div className="infotitle">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <aside className="tags">
            {
              tags.map((tag, index) => (
                <Tag key={index} taginfo={tags[index]} />
              ))
            }

          </aside>

        </div>


        <div className="right">
          <aside className="host"><h3>{logement.host.name} </h3> <img src={logement.host.picture} alt="" />


          </aside>
          <div className="rate">
            <Star filled={rating >= 1} />
            <Star filled={rating >= 2} />
            <Star filled={rating >= 3} />
            <Star filled={rating >= 4} />
            <Star filled={rating >= 5} />
          </div>
        </div>
      </div>
      <div className="details">
        <Collapse subclass="prop" keyword="Description" content={logement.description} />
        <Collapse subclass="prop" keyword="Equipements" content={equipements} />
      </div>

    </div>
  )
}

Property.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string,
    description:PropTypes.string,
    equipments:PropTypes.array,
    host:PropTypes.object,
    location: PropTypes.string,
    rating: PropTypes.string,
    tags:PropTypes.array,
    title: PropTypes.string,
    
  }).isRequired,
}