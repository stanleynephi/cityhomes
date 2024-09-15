/**This section contains testimony from multiple user
 * and the services they received from us.
 */
import styles from "../styles/testimony.module.css"



//import react and also cards.
import React from 'react';
import Card from '../components/usercards';

const Testimony =()=>{

    return(
        <div className={styles.container}>
            <h1>Testimony</h1>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}


export default Testimony