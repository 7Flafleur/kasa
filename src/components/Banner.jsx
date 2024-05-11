import img1 from "../assets/Image source 1.png"
import img1l from "../assets/img1l.jpg"


export default function Banner (props) {
    return(
        <section className={`banner ${props.id}`} style={{ backgroundImage: `url(${props.img})` }}>
            <p className="chezvous">Chez vous, partout et ailleurs</p>
        </section>
    )
}