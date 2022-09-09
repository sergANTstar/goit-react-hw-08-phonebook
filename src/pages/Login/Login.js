import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/authUser/authUserApi";
import css from './Login.module.css'


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputChange = ({target: {name, value}}) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                throw new Error();
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={css.login}>
            <form
            onSubmit={formSubmit}
            className={css.login__form}
            >
                <div   className={css.login__input__block}>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={inputChange}
                    placeholder="name"
                    className={css.login__input}
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
                    className={css.login__input}
                    required
                    />
                </div>
               <button 
            className={css.login__button}
            type="submit">Login</button>
        </form>
     
    </div>
    )
}

export default Login;