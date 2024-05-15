import { getLogement } from "../api";
import Carousel from "./Slideshow"
import { useParams } from "react-router-dom"
import Collapse from "./Collapse";

export default function Property(){

    const {Id} =useParams();

    const logement= getLogement(Id);

    console.log(logement)

    const equipements = logement.equipments.map(equipement=>equipement)

    console.log("equipements:",equipements)

    return(
<div className="property">
    <Carousel id={Id}/>
    <div className="title">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
    </div>
    <aside className="host"><img src={logement.host.picture} alt="" />
    <h3>{logement.host.name} </h3>
    
    </aside>
    <aside className="tags"><span></span><span></span></aside>
    <div className="rate"></div>
    <div className="details">
        <Collapse subclass="prop" keyword="Description" content={logement.description}/>
        <Collapse subclass="prop" keyword="Equipements" content={equipements}  />
    </div>

</div>
)
}