import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/authUser/authUserApi";
import css from './Registration.module.css'

const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const inputChange = ({target:{name, value}}) => {
        switch (name) {
            case 'name':
           setName(value);
           break
                
            case 'email':
                setEmail(value);
                break
               
            case 'password':
                setPassword(value);
                break
               
            default:
                throw new Error();
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password }));
        setPassword('');
    };

    return (
        <div className={css.registration}>
            <form
            onSubmit={formSubmit}
            className={css.registration__form}
            >
                <div className={css.registration__input__block}>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputChange}
                    placeholder="name"
                    className={css.registration__input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={inputChange}
                    placeholder="mail"
                    className={css.registration__input}
                    pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                    title="Invalid email address"
                    required
                    />
                    <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={inputChange}
                    className={css.registration__input}
                    required
                    />
                </div>
                <button
             className={css.registration__button}
                type="submit">Sign Up</button>
        </form>
    </div>
    )
}

export default Registration