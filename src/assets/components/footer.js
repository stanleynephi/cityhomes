/* Create a footer component that will be 
used across various pages of the website */
import Contactcard from "./companycontact"
import Forms from "./forms"
import styles from "../styles/footer.module.css"
// import useRef



const Footer = () => {

    return(
        <div className={styles.footer} id="footer">
            <Contactcard contactCard={styles.contactcard} addresses={styles.addresses} electronic={styles.electronic}
                address={styles.address}/>
            <Forms style={styles.forms}/>
        </div>
    )
}

export default Footer