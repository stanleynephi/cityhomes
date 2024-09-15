/* Import the navigation function and the 
    create a header with it*/
import styles from "../styles/header.module.css"
import Navigation from "./navigations";

function Header () {

    return (
        <header className={styles.header}>
            <img alt="company_logo"/>
            <Navigation/>
        </header>
    )
}

export default Header