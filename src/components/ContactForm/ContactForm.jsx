import css from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { toast } from 'react-toastify';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from "../../redux/contact/contsctsApi"
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm () {

  const [createContact, { isLoading }] = useCreateContactMutation();

  const { data: contacts } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

      const inputChange = (e) => {
        const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error();
      }
    };
    
        const formSubmit = async e => {
          const contact = { name, number };
          e.preventDefault();
          const normalzeName = contact.name.toLocaleLowerCase();
          if (contacts.find(item => item.name.toLocaleLowerCase() === normalzeName)) {
            return   (toast(`${name} is already in contacts`, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            )
          }
          await createContact(contact);
          
          
          setName('');
          setNumber('');
   
        };
      
        

    
        return(
            <form onSubmit={formSubmit} className={css.contact__form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChange}
              placeholder="Name"
              className={css.contact__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <input
              type="tel"
              name="number"
              value={number}
              placeholder="Number"
              onChange={inputChange}
              className={css.contact__input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button className={css.contact__button} type="submit">{isLoading ? <div className={css.spiner}><Spiner/></div> : 'Add contac'}t</button>
          </form>
        );
    }

  