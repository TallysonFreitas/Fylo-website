import style from './form.module.css'
import { useState } from 'react'

export default ()=>{
    const [sign, setSign] = useState(false)
    const [emailUser, setEmailUser] = useState('')

    return(
        <div data-aos="fade-up" className={style.conteudo}>
            <h2 className={style.title}>{sign === true ? ('Everything Ok sir.!'):('Get early access today')}</h2>
            <p className={style.text}>{sign === true ? (`An email has been send to ${emailUser}. Confirm your email to progress.`):('It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.')}</p>
            <form action="" className={style.form}>
                {sign === true ? (
                    <></>
                ):(
                    <>
                        <input className={style.input} type="email" placeholder="Your email" onKeyUp={(event)=>{setEmailUser(event.target.value)}}/>
                        <button className={style.button} type="submit" onSubmit={()=>{setSign(!sign)}}>Get Started For Free</button>
                    </>
                )}
            </form>
        </div>
    )
}