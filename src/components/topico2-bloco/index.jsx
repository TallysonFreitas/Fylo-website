import style from './topico2.module.css'

export default ({src,title,text})=>{
    return(
        <div className={style.item}>
            <img className={style.image} src={src} alt="" />
            <h3 className={style.title}>{title}</h3>
            <p data-aos="fade-up" className={style.text}>{text}</p>
        </div>
    )
}