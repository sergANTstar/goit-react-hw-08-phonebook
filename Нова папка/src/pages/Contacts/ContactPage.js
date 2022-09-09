import ContactForm from "components/ContactForm/ContactForm";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";


const ContactsPage = () => {


    return(
        <section>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter/>
            <Contacts/>
        </section>
    )
}

export default ContactsPage