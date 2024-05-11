import img1 from "../assets/Image source 1.png"
import Banner from "./Banner"

export default function Home () {
    return(
        <div className="home">
            <Banner img={img1} id="home-banner" />
            <section className="gallery">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                
            </section>
        </div>
    )
}

