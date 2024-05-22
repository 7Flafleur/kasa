import { getLogement } from "../dataretrieval";
import Carousel from "../components/Slideshow"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import { Star } from "../components/Star";
import Tag from "../components/Tag";
import { useEffect } from "react";



export default function Property() {

  const navigate = useNavigate();

  const { id } = useParams();

  const logement = getLogement(id);

  console.log(logement)

  // gérer cote asynchrone

  useEffect(() => {
    if (logement === undefined) {
      navigate("/Property/404");
    }
  }, [logement, navigate]);

  if (logement === undefined) {
    return null;
  }

  console.log(logement)

  const equipements = logement.equipments.map(equipement => equipement)



  const tags = logement.tags;

  const rating = logement.rating;

  return (
    <div className="property">
      <Carousel logement={logement} id={logement.id} />
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