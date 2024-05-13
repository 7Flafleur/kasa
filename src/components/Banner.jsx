

export default function Banner (props) {
    return(
        <section id={props.id} className="banner"  style={{ backgroundImage: `url(${props.img})` }}>
   
   
                <p className="chezvous">{props.chezvous}</p>
          
          
        </section>
    )
}