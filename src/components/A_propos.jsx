import Banner from "./Banner"
import img2 from "../assets/im2.jpg"
import Collapse from "./Collapse"





export default function Apropos () {
    return(
        <div className="apropos">
            
                <Banner  img={img2} chezvouz="" />
                <div className="Collapse_container">
                    <Collapse keyword="Fiabilité"/>
                    <Collapse keyword="Respect" />
                    <Collapse keyword="Service"   />
                    <Collapse keyword="Sécurité"/>
                </div>
            
            
        </div>
    )
}