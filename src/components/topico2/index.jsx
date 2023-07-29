import style from './topico2.module.css'
import img from '../../images/illustration-stay-productive.png'

export default ()=>{
    return(
        <div className={style.container}>
            <img className={style.img} src={img} alt="" />
            <div className={style.textos}>
                <h1 className={style.title}>Stay productive, wherever you are</h1>
                <p className={style.text}>Never let location be an issue when accessing yout files. Fylo has you covered for all of your file storage needs.</p>
                <p className={style.text}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a className={style.link} href="#">See how Fylo works</a>
            </div>
        </div>
    )
}