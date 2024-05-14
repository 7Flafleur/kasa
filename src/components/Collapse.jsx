import { useState } from "react";
import '../styles/collapse.scss'
import chevup from "../assets/chevup.png"
import chevdown from "../assets/chevdown.png"



export default function Collapse(props){

    const [isOpen,setIsOpen] = useState(false);

    const iconStyle = 
         isOpen ? chevdown : chevup
    

         
    const content= Array.isArray(props.content) ? props.content : [props.content]
    

    function handleClick() {
        setIsOpen(!isOpen);
        console.log("rotated")
    }

    return(
        <ul className="Collapse">
            {/* {isOpen ? "The dropdown is open" : "The dropdown is closed"} */}
            <div className="dropdown"><span className="keyword">{props.keyword}</span>
            <span className={`icons ${isOpen ? "rotated" : ""}`} onClick={handleClick}>
    <img src={chevdown} alt="" />
</span>
            </div>
         {content.map(contentItem => (<li className={`collapse_content ${isOpen? "visible" : "hidden"  }`}>{content}</li>
))}
        </ul>
    )






}




