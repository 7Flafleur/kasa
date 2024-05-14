import Banner from "./Banner"
import img2 from "../assets/im2.jpg"
import Collapse from "./Collapse"
import { getContents } from "../api"
import { getContent } from "../api"





export default function Apropos () {

    const contents=getContents();

    return(
        <div className="apropos">
            
                <Banner  img={img2} chezvouz="" />

                <ul className="Collapse_container">
                    <li>
                        <Collapse keyword="Fiabilité"/>
                    </li>
                    <li>
                        <Collapse keyword="Respect" />
                    </li>
                    <li>
                        <Collapse keyword="Service"   />
                    </li>
                    <li>
                        <Collapse keyword="Sécurité"/>
                    </li>
                </ul>
            
            
        </div>
    )
}