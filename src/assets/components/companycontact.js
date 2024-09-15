/**a contact card for the company with email and phone
 * number
 */
//import javascript date to be used 


const Contactcard= (props) =>{
    const date = new Date()

    return(
        <>
        <div className={props.contactCard}>
            <h2>
                To Contact Our Rental Or Sales Team
                Plese Call or Email Us:
            </h2>
            <div className={props.addresses}>
                <div className={props.electronic}>
                    <p>Phone: <a href="tel: +233201172848">+233201172848</a></p>
                    <p>Email: <a href="mailto:info@rentalsales.com">info@</a> </p>
                    <p>Fax: </p>
                </div>
                <div className={props.address}>
                    <p>Address: 57 Independence Avenue Accra Ghana</p>
                </div>
            </div>
            <p>&copy; {date.getFullYear()} This is a company website</p>
        </div>
        </>
    )
}

export default Contactcard