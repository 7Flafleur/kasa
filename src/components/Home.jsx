import Banner from "./Banner"
import img1l from "../assets/img1l.jpg"
import img2 from "../assets/im2.jpg"


export default function Home () {
    return(
        <div className="home">
            <Banner  img={img2} />
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

