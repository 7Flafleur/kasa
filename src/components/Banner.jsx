export default function Banner (props) {
    return(
        <section className={`banner ${props.id}`}>
            <img src={props.img} alt="" />
        </section>
    )
}