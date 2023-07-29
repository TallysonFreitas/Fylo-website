import { useState } from "react"
import style from './header.module.css'

export default ()=>{
    const [titulo, setTitulo] = useState(0)
    return(
        <header className={style.header}>
            <div className={style.header__container}>
                <h1><a href="#" className={style.title}></a></h1>
                <ul>
                    <li className={style.li}><a className={style.liker} href="#">Features</a></li>
                    <li className={style.li}><a className={style.liker} href="#">Team</a></li>
                    <li className={style.li}><a className={style.liker} href="#">Sign in</a></li>
                </ul>
            </div>
        </header>
    )
}