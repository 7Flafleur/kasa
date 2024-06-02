import Property from './Property';
import { useParams } from "react-router-dom";
import { getLogement } from "../dataretrieval";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function PropertyFetcher(){

    const {id}= useParams();

    const [logement, setLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchlogement = async () => {

            try{
                const data = getLogement(id);
                setLogement(data);
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setIsLoading(false)
            }

        }
       fetchlogement();

    },[]


    )

    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        useNavigate("/Property/404");
    }

    return(

        <Property logement={logement}/>
    )





}