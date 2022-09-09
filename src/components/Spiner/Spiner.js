import {SpinnerDotted} from 'spinners-react'
import css from './Spiner.module.css'


 const Spiner = () => {
  return (
    <div className={css.scpiner}>
      <SpinnerDotted
        size={100}
        thickness={100}
        speed={100}
        color="#3498db"
        
        
        />
    </div>
  );
};

export const SpinerContscts = () => {
  return (
   
      <SpinnerDotted
        size={100}
        thickness={100}
        speed={100}
        color="#3498db"
        
        />
  );
};

export default Spiner
