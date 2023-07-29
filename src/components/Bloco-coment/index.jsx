import style from './bloco-coment.module.css'

export default ({text,img,name,titulo})=>{
    return(
        <div className={style.conteudo}>
            <p data-aos="fade-up" className={style.text}>{text}</p>
            <div data-aos="fade-up" className={style.person}>
                <img className={style.img} src={img} alt="" />
                <div className={style.conteudo-name}>
                    <strong className={style.name}>{name}</strong>
                    <p className={style.textTitulo}>{titulo}</p>
                </div>
            </div>
        </div>
    )
}