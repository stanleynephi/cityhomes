//set a default prop for the button
import PropTypes from "prop-types";



//create a reusable react
const Button = (props) => {

    return(
      <button  className={props.style}value={props.value} onClick={props.onClick}>{props.buttonname} </button>
    )
}

Button.propTypes = {

    value: PropTypes.string,
    onClick: PropTypes.func,
    buttonname: PropTypes.string
}

Button.defaultProps = {
    buttonname: 'Click me',
    value: "#",
}



export default Button