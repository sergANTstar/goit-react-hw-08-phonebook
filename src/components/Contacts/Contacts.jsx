import css from '../Contacts/Contacts.module.css';
import { useSelector } from 'react-redux';


import {useGetContactsQuery, useDeleteContactMutation,
} from "../../redux/contact/contsctsApi";

import { getFilter } from "../../redux/contact/contactsFilter";
import PropTypes from 'prop-types';




const Contacts = () => {

  const { data: contacts} = useGetContactsQuery();
  const filterValue = useSelector(getFilter);


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

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

   return   ( <div className={css.contacts}>
                <ul className={css.contacts__list}>
                    { contacts && filterContacts.map(({id, name, number}) => {
                        return(
                            <li className={css.contacts__items} key={id}>
                                <p className={css.contacts__text}>
                                    {name}: {number}
                                </p>
                                <button
                                    className={css.contact__button}
                                    type="button" 
                                    onClick={() => deleteContact(id)}
                                    disabled={isDeleting}>
                                    {isDeleting ? 'deleting...' : 'Delete'}
                                </button>
                            </li>
                        )
                    })}
                </ul>
                </div>
            );
        
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default Contacts
