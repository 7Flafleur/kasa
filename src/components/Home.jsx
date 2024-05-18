import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import Banner from "./Banner"
import img1 from "../assets/IMG1.png"
import { getLogements } from "../dataretrieval"
import { FaCarCrash } from 'react-icons/fa';



export default function Home () {
    const [logements, setLogements] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
const data= await getLogements();
setLogements(data);


            }catch(err){
                setError(err.message)

            }finally{
                setIsLoading(false)

            }
        };
        fetchLogements();
    },[]

    )
    


        


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div >Logements indisponibles</div>;
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

