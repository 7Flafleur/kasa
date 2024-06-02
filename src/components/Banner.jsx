import PropTypes from 'prop-types';

export default function Banner(props) {
    return (
        <section id={props.id} className="banner" style={{ backgroundImage: `url(${props.img})` }}>

            <div className="banner_filter">
                {props.children}
            </div>
        </section>
    )
}

Banner.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    children: PropTypes.node,
};