import Header from './components/header'
import Conteudo1 from './components/topico1'
import Bloco from './components/topico2-bloco'
import Conteudo2 from './components/topico2'
import Coment from './components/Bloco-coment'
import Form from './components/Form'
import Footer from './components/Footer'
import image1 from "./images/icon-access-anywhere.svg"
import image2 from './images/icon-security.svg'
import image3 from "./images/icon-collaboration.svg"
import image4 from "./images/icon-any-file.svg"
import icone1 from './images/profile-1.jpg'
import icone2 from './images/profile-2.jpg'
import icone3 from './images/profile-3.jpg'

import './global.css'


function App() {
  const titulos = ["Access your files, anywhere","Security you can trust","Reak-time collaboration","Stone any type of file"]

  return (
    <>
      <Header/>
      <Conteudo1 />
      <div className="shape"></div>
      <div className='container1'>
        <Bloco src={image1} title={titulos[0]} text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere"/>
        <Bloco src={image2} title={titulos[1]} text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere"/>
        <Bloco src={image3} title={titulos[2]} text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere"/>
        <Bloco src={image4} title={titulos[3]} text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere"/>
      </div>
      <Conteudo2/>
      <div className='container2'>
        <Coment text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." name="Satish Patel" titulo="Founder & CEO, Huddle" img={icone1}/>
        <Coment text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." name="Satish Patel" titulo="Founder & CEO, Huddle" img={icone2}/>
        <Coment text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." name="Satish Patel" titulo="Founder & CEO, Huddle" img={icone3}/>
      </div>
      <div className='container'>
        <Form/>
      </div>
      <Footer/>
    </>
  )
}

export default App
