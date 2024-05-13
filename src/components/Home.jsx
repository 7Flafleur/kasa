import { Link } from "react-router-dom"
import Banner from "./Banner"
import img1 from "../assets/IMG1.png"
import img2 from "../assets/im2.jpg"
import rectangle from "../assets/Rectangle 1.png"
import { getLogements } from "../api"


export default function Home () {
    const logements = getLogements();
    return(
        <div className="home">
           <Banner img={img1} chezvous="Chez Vous, partout et ailleurs">
           <p className="chezvous">Chez Vous, partout et ailleurs</p>
            </Banner>






  <ul className="gallery">
{
    logements.map(logement =>(
        <li className="card" key={logement.id}>
            <Link to={logement.id}><div className="card_filter"><span className="title">{logement.title}</span></div>
            <img src={logement.cover} alt={logement.title} />
                </Link>
        </li>
    ))
}

  </ul>
        </div>
    )
}

