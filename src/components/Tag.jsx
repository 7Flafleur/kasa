
import PropTypes from 'prop-types';

export default function Tag(props){

    return(
        <span className="tag">{props.taginfo}</span>

    )






}


Tag.propTypes = {
    taginfo: PropTypes.string.isRequired,
};