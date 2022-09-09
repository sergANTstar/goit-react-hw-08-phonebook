import classNames from 'classnames'
import css from './Backround.module.css'


const Backround = () => {

    return (
        <>
            <div className={classNames(css.backround, css.waveWrapper, css.waveAnimation)}>
                <div className={classNames(css.waveWrapperInner, css.bgTop)}>
                    <div  className={classNames(css.wave, css.waveTop, css.img1)}></div>
                </div>
                <div  className={classNames(css.waveWrapperInner, css.bgMiddle)}>
                    <div  className={classNames(css.wave, css.waveMiddle, css.img2)} ></div>
                </div>
                <div className={classNames(css.waveWrapperInner, css.bgBottom)}>
                    <div className={classNames(css.wave, css.waveBottom, css.img3) }></div>
                </div>
            </div>
        </>
    )
}
export default Backround