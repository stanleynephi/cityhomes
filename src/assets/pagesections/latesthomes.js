/*Import the latest home cards to create a home
section for the latest homes listed on the site */

import LatestCards from "../components/latestcards";
import styles from "../styles/latesthome.module.css"

const LatestHomeSection = () =>{

    return(

        <div className={styles.latesthome_container}>
           <h1>Latest Class</h1>
           <div className={styles.content}>
                <LatestCards latestcardscontents={styles.homecontents}/>
                <LatestCards latestcardscontents={styles.homecontents}/>
           </div>
            
        </div>
    )
}


export default LatestHomeSection

