/*The latest cards for the latest home listings
using props and other react components */


function LatestCards(props){

    return(
        <div className={props.homecontent}>
            <div className={props.latestcardscontents}>
                <img src={props.latesthomeimage} alt={props.latesthomesname}/>
                <div>
                    <h3>{props.hometype}</h3>
                    <h1>{props.homeavenue}</h1>
                    <p>{props.homedescriptions}</p>
                    <h2>{props.homevalues}</h2>
                </div>
            </div>
        </div>
    )
}


LatestCards.defaultProps = {
    latesthomeimage: "",
    latesthomesname: "Home",
    hometype: "3 bedroom apartment",
    homeavenue: "57 Independece Avenue North Ridge",
    homedescriptions: "This homes come with a garden, a master bedroom\
    a living room and 3 bathrooms",
    homevalues: "$1,000,000"
}



export default LatestCards