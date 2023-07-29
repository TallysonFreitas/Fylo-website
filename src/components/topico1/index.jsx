import style from './topico1.module.css'
import Imagem from './illustration-intro.png'

export default ()=>{
    return(
        <div className={style.container}>
            <img className={style.img} src={Imagem} alt="imagem" />
            <h2 className={style.title}>All your files in one secure location, accessible anywhere.</h2>
            <p className={style.text}>Fylo stores all yout most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers</p>
            <button className={style.button}>Get Started</button>
        </div>
    )
}