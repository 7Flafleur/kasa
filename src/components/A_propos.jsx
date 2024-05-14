import Banner from "./Banner"
import img2 from "../assets/im2.jpg"
import Collapse from "./Collapse"
import { getContents, getKeywords } from "../api"
import { getContent } from "../api"





export default function Apropos () {

    const keywords=getKeywords();

    console.log(keywords)

    // const content=getContent("Fiabilité").content

    // console.log("content:",content)

    return(
        <div className="apropos">
            <Banner  img={img2} chezvouz="" />
            <ul className="Collapse_container"  >
                {keywords.map(keyword => (
                    <li className="Collapse_component" key={keyword}>
                        <Collapse subclass="aprop" keyword={keyword} content={getContent(keyword).content}/>
                    </li>
                ))}
            </ul>
        </div>
    )

    
}