import css from '../Contacts/Contacts.module.css';
import { useSelector } from 'react-redux';
import Spiner from 'components/Spiner/Spiner';
import { filterSlice} from '../../redux/contact';
import { contactsApi } from '../../redux/contact';



const Contacts = () => {

    const { data: contacts, isLoading: loadingList } =
    contactsApi.useFetchContactsQuery();
  const filterValue = useSelector(filterSlice.getFilter);


  const getContactsFilter = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
    );
  };
  const filterContacts = getContactsFilter();

  const [deleteContact, { isLoading: isDeleting }] =
  contactsApi.useDeleteContactMutation();

   return   (
                <ul className={css.contacts__list}>
                    {loadingList && <Spiner/>}
                    { contacts && filterContacts.map(({id, name, phone}) => {
                        return(
                            <ol className={css.contacts__items} key={id}>
                                <p>
                                    {name}: {phone}
                                </p>
                                <button
                                    className={css.contact__button}
                                    type="button" 
                                    onClick={() => deleteContact(id)}
                                    disabled={isDeleting}>
                                    {isDeleting ? 'deleting...' : 'Delete'}
                                </button>
                            </ol>
                        )
                    })}
                </ul>
            );
        
};

export default Contacts
