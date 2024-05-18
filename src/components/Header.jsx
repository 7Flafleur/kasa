import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png"

export default function Header() {


    return(
       
            <header className="header">
                <img src={Logo} alt="" />
                
                <nav className="header_nav">
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                    <NavLink to="/about">
                        A propos
                    </NavLink>
                </nav>

            </header>
       
    )
    
}

