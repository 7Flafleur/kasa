import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



export function Star(props) {
    return (
        <FontAwesomeIcon 
            className={`star ${props.filled ? 'filled' : ''}`} 
            icon={faStar} 
            style={{ color: props.filled ? 'red' : 'grey' }}
        />
    );
}