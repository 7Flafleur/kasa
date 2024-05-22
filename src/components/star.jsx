import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';



export function Star(props) {
    return (
        <FontAwesomeIcon 
            className={`star ${props.filled ? 'filled' : ''}`} 
            icon={faStar} 
            style={{ color: props.filled ? '#ff6060' : 'grey' }}
        />
    );
}


Star.propTypes ={
    filled: PropTypes.string,

};