import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {  filter, getFilter } from '../../redux/contact/contactsFilter'; 

const Filter = () => {

    const dispatch = useDispatch();

    const filterValue = useSelector(getFilter);

    const changeFilter = e => {
        dispatch(filter(e.currentTarget.value.toLocaleLowerCase().trim()));
      };

    return (<form className={css.filter}>
                <input
                type="text"
                value={filterValue}
                onChange={changeFilter}
                className={css.filter__input}
                placeholder="Find contacts by name"
                />
            </form>);
};

export default Filter
