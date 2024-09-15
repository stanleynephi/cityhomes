// Import prop-types
import PropTypes from "prop-types";
import Button from "./button";


function Card (props) {
    // Return a card that can take an image, and a header
    return (
        <div className={props.cardstyle}>
            <div className="card_image">
                <img src={props.image} alt={props.alttext}/>
            </div>
            <div className={props.cardcontent}>
                <h2>{props.header}</h2>
                <p>{props.cardinfo}</p>
                <h3>{props.amountforhouse}</h3>
                <Button/>
            </div>
        </div>
    );
}

// Define propTypes
Card.propTypes = {
    header: PropTypes.string,
    cardcom: PropTypes.string,
    image: PropTypes.string,
    alttext: PropTypes.string
};

// Define defaultProps
Card.defaultProps = {
    image:"",
    alttext:"homelogo",
    header: "Nephi",
    cardinfo: "This is a default card description."
};

export default Card;
