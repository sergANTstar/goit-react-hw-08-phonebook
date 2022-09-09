import css from './Welcome.module.css'
import classNames from 'classnames'

const Welcome = () => {

    return (
        <div className={css.container}>
        <div className={css.row}>
          <div className={classNames(css.col_md_12, css.text_center)}>
            <h2 className={css.animate_charcter}>Welcome!</h2>
          </div>
        </div>
      </div>
        
    )
}
export default Welcome