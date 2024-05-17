import { getLogement } from "../api";
import Carousel from "./Slideshow"
import { useParams } from "react-router-dom"
import Collapse from "./Collapse";
import { Star } from "./star";
import Tag from "./Tag";



export default function Property(){

  

    const {Id} =useParams();

    const logement= getLogement(Id);

    console.log(logement)

    const equipements = logement.equipments.map(equipement=>equipement)

    console.log("equipements:",equipements);

    const tags=logement.tags;

    const rating= logement.rating;

    return(
<div className="property">
    <Carousel id={Id}/>
    <div className="property_infos">
        <div className="left">
            <div className="infotitle">
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
            </div>
            <aside className="tags">
              {
                tags.map((tag,index) => (
                    <Tag key={index} taginfo={tags[index]}/>
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
        <Collapse subclass="prop" keyword="Description" content={logement.description}/>
        <Collapse subclass="prop" keyword="Equipements" content={equipements}  />
    </div>

</div>
)
}