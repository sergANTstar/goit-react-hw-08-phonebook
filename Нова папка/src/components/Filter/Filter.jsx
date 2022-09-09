import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from 'redux/contact'; 

const Filter = () => {

    const dispatch = useDispatch();

    const filter = useSelector(filterSlice.getFilter);

    const changeFilter = e => {
        dispatch(filterSlice.filterItems(e.currentTarget.value));
      };

    return (<form className={css.filter}>
                <input
                type="text"
                value={filter}
                onChange={changeFilter}
                className={css.filter__input}
                placeholder="Find contacts by name"
                />
            </form>);
};

export default Filter
