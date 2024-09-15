/* create the text for the welcome part
of the page section*/
import Button from "./button"


const HeroMessage =(props) => {


    //create a prop to recieve text and buttons
    return (
        <div className={props.style}>
            <h1>{props.introtext}</h1>
            <h4>{props.info}</h4>
            <p>{props.textcontent}</p>
            <Button/>
        </div>
    )
}

HeroMessage.defaultProps = {
    introtext: "Welcome to Our Housing Company",
    info: "$0",
    textcontent: "We provide affordable homes in the heart of Accra\
    at  lower prices"
}

export default HeroMessage