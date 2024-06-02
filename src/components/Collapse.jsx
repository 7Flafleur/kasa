import { useState } from "react";
import '../styles/collapse.scss'
import chevdown from "../assets/chevdown.png"
import PropTypes from 'prop-types';



export default function Collapse(props){

    const [isOpen,setIsOpen] = useState(false);

         
    const content= Array.isArray(props.content) ? props.content : [props.content]
    

    function handleClick() {
        setIsOpen(!isOpen);
      
    }

    return(
        <ul className="Collapse">
            {/* {isOpen ? "The dropdown is open" : "The dropdown is closed"} */}
            <div className="dropdown"><span className="keyword">{props.keyword}</span>
            <span className={`icons ${isOpen ? "rotated" : ""}`} onClick={handleClick}>
    <img src={chevdown} alt="" />
</span>
            </div>
         <div className={`licontainer ${props.subclass}`} >
             {content.map((contentItem,index )=> (<li  key={index} className={`collapse_content ${isOpen? "visible" : "hidden"  }`}>{contentItem}</li>
             ))}
         </div>
        </ul>
    )


}

Collapse.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    keyword: PropTypes.string.isRequired,
    subclass: PropTypes.string,
};



