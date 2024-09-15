/*create a property sections for all the 
homes on sale */
import Card from "../components/usercards"
import styles from "../styles/properties.module.css"

function Properties (props){

    return(
        <div className="properties">
            <h1>Properties</h1>
            <div className={props.style}>
                <Card cardstyle={styles.cardstyles}/>
                <Card cardstyle={styles.cardstyles}/>
                <Card cardstyle={styles.cardstyles}/>
            </div>
        </div>
    )
}

export default Properties