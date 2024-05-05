import { Link, NavLink } from "react-router-dom";

export default function PageNotFound(){
    return(
        <div>
            <h1 id="notFoundTitle" className="Page_not_found">404</h1>
            <h2 id="notFoundSubtitle">Oups! La page que vous demandez n'existe pas!</h2>

            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}