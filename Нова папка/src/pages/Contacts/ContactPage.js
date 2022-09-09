import ContactForm from "components/ContactForm/ContactForm";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import css from "./ContactPage.module.css"


const ContactsPage = () => {


    return(
        <section>
            <h1 className={css.contast_h}>create contact</h1>
            <ContactForm/>
            <h2 className={css.contast_h}>contact search</h2>
            <Filter/>
            <Contacts/>
        </section>
    )
}

export default ContactsPage