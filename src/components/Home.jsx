import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Banner from "./Banner"
import img1 from "../assets/IMG1.png"
import { getLogements } from "../dataretrievalfunctions"


export default function Home () {
    const [logements, setLogements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLogements = async () => {
    const data = await getLogements();
            setLogements(data);
            setIsLoading(false);}

        fetchLogements();
    }, []);

    if (isLoading){
        return <div className='fallback'>Un instant svp...</div>
    }

    
    return(
        <div className="home">
           <Banner img={img1} chezvous="Chez Vous, partout et ailleurs">
           <p className="chezvous">Chez Vous, partout et ailleurs</p>
            </Banner>
    

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
        </div>
    )
}

