

export default function Banner (props) {
    return(
        <section id={props.id} className="banner"  style={{ backgroundImage: `url(${props.img})` }}>
   
       
                    <div className="apropos_banner">
                        <p className="chezvous">{props.chezvous}</p>
                    </div>
       
       
   
        </section>
    )
}