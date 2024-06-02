import { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import img1 from "../assets/IMG1.png"
import { getLogements } from "../dataretrieval"
import Gallery from '../components/Gallery';




export default function Home () {
    const [logements, setLogements] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
const data=  getLogements();
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
    

<Gallery logements={logements}/>
        </div>
    )
}

