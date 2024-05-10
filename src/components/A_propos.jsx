import Banner from "./Banner"
import img2 from "../assets/Image source 2.png"



export default function Apropos () {
    return(
        <div className="apropos">
            <Banner img={img2} id="apropos-banner" />
            {/* Other content */}
        </div>
    )
}