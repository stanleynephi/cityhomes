/* this have details about the homes that are being
listed on the website */
import PropTypes from "prop-types"

function SimplehomeCard(props){

    return(
        <div>
            <h1>Properties for Sale</h1>
            <div className={props.styles}>
                <img src={props.image} alt={props.alt}/>
                <div className="cardcontent">
                    <h2>{props.avenue}</h2>
                    <h4>{props.homerooms}</h4>
                    <p>{props.homedescription}</p>
                    <p>{props.amount}</p>
                </div>
            </div>
        </div>
    )
}


SimplehomeCard.defaultProps={
    image: "",
    alt: "",
    avenue: "57 Independce Avenue",
    homerooms: "3 Bedrooms",
    homedescription: "This is a beautiful home with a lovely garden\
    Situated in the middle of Accra the Capital of Ghana",
    amount:"$0"
}



export default SimplehomeCard