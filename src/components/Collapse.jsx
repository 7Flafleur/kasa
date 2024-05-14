import { useState } from "react";
import '../styles/collapse.scss'
import chevup from "../assets/chevup.png"
import chevdown from "../assets/chevdown.png"



export default function Collapse(props){

    const [isOpen,setIsOpen] = useState(false);

    const iconStyle = 
         isOpen ? chevdown : chevup
    

//     function toggleCollapse(){
// setIsOpen(!isOpen)
//     }

    

    function handleClick() {
        setIsOpen(!isOpen);
        console.log("rotated")
    }

    return(
        <ul className="Collapse">
            {isOpen ? "The dropdown is open" : "The dropdown is closed"}
            <div className="dropdown"><span className="keyword">{props.keyword}</span>
            <span className={`icons ${isOpen ? "rotated" : ""}`} onClick={handleClick}>
    <img src={chevdown} alt="" />
</span>
            {/* <span className="icons" onClick={handleClick}>   
                     <img className={isOpen ? "hidden" : "visible"} src={chevdown} alt="" />
                    <img className={isOpen ? "visible" : "hidden"} src={chevup} alt="" />
                    </span> */}
            </div>
            <li className={`collapse_content ${isOpen? "visible" : "hidden"  }`}>{props.content}</li>
        </ul>
    )






}






// import { useState } from "react";

// export default function YourComponent() {
//     const [isRotated, setIsRotated] = useState(false);

//     function handleClick() {
//         setIsRotated(!isRotated);
//     }

//     return (
//         <div className={`icons ${isRotated ? "rotate" : ""}`} onClick={handleClick}>
//             {/* Your icon here */}
//         </div>
//     );
// }