import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from 'redux/contact'; 

const Filter = () => {

    const dispatch = useDispatch();

    const filter = useSelector(filterSlice.getFilter);

    const changeFilter = e => {
        dispatch(filterSlice.filterItems(e.currentTarget.value));
      };

    return (<label>
                <input
                type="text"
                value={filter}
                onChange={changeFilter}
                className={css.contact__input}
                placeholder="Find contacts by name"
                />
            </label>);
};

export default Filter
