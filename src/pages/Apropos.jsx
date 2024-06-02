
import { useState,useEffect } from "react"
import Banner from "../components/Banner"
import img2 from "../assets/im2.jpg"
import Collapse from "../components/Collapse"
import { getKeywords, getContent } from '../dataretrieval'






export default function Apropos () {

    const [keywords, setkeywords] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchkeywords = async () => {

            try{
                const data = await getKeywords();
                setkeywords(data);
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setIsLoading(false)
            }

        }
        fetchkeywords();

    },[]


    )

    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div >Contenu indisponible</div>;
    }

    return(
        <div className="apropos">
            <Banner  img={img2} />
            <ul className="Collapse_container"  >
                {keywords.map(keyword => (
                    <li className="Collapse_component" key={keyword}>
                        <Collapse subclass="aprop" keyword={keyword} content={getContent(keyword).content}/>
                    </li>
                ))}
            </ul>
        </div>
    )

    
}