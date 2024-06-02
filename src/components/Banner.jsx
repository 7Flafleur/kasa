import PropTypes from 'prop-types';

export default function Banner (props) {
    return(
        <section className="banner"  style={{ backgroundImage: `url(${props.img})` }}>
  
                        <div className="banner_filter">
                            {props.children}
                        </div>
        </section>
    )
}

Banner.propTypes = {
    
    img: PropTypes.string.isRequired,
    children: PropTypes.node,
};