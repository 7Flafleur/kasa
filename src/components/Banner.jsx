

export default function Banner (props) {
    return(
        <section className="banner"  style={{ background: `url(${props.img})` }}>
            <p className="chezvous">{props.chezvous}</p>
        </section>
    )
}