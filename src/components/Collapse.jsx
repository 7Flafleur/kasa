import { useState } from "react";
import '../styles/collapse.scss'
import chevup from "../assets/chevup.png"
import chevdown from "../assets/chevdown.png"



export default function Collapse(props){

    const [isOpen,setIsOpen] = useState(false);

    const iconStyle = {
        backgroundImage: `url(${isOpen ? chevdown : chevup})`,
    };

//     function toggleCollapse(){
// setIsOpen(!isOpen)
//     }

    

    function handleClick() {
        setIsOpen(!isOpen);
        console.log("rotated")
    }

    return(
        <div className="Collapse">
            {isOpen ? "The dropdown is open" : "The dropdown is closed"}
            <div className="dropdown"><span className="keyword">{props.keyword}</span>
            <span className="icons" style={iconStyle} onClick={handleClick}></span>
            </div>
            {/* <button onClick={toggleCollapse}>Toggle</button> */}
        </div>
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