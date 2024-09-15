//creating the homepage for the other pages
import Header from "../components/header"
import HeroMessage from "../components/welcomeinfo"
import Properties from "../pagesections/propertiesonsales"
import LatestHomeSection from "../pagesections/latesthomes"
import Testimony from "../pagesections/testimonysection"
import Footer from "../components/footer"
import styles from "../styles/heropage.module.css"
import propertiesstyles from "../styles/properties.module.css"
//import the useRef react module to reference sections of the homepage
import React, { useRef } from "react"

function Home(){
    const footerReference = useRef(null)

    return(
        <>
            <Header/>
            <HeroMessage style={styles.heropage}/>
            <Properties style={propertiesstyles.properties}/>
            <LatestHomeSection/>
            <Testimony/>
            <Footer ref={footerReference}/>
        </>
    )
}

export default Home