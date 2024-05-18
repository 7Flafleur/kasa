import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PageNotFound(){
    return(
        <div  id="p404"> 
            <h1 id="notFoundTitle" className="Page_not_found">404</h1>
            <h2 id="notFoundSubtitle">Oups! La page que vous demandez n {`&apos;`} existe pas!</h2>

            <Link id="linkhome" to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

PageNotFound.propTypes ={
    id: PropTypes.string,
};