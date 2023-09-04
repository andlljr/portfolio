/// <reference types="vite-plugin-svgr/client" />

// svg
import { ReactComponent as Logo } from './assets/border.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Email } from './assets/email.svg';

// images
import Card from './components/Card';
import Stone from './assets/stone.png';
import Hurb from './assets/hurb.png';
import Usp from './assets/medicina-usp.png';
import Estapar from './assets/estapar.png'
import Ael from './assets/ael.png';

// css
import './App.css';

// library
import { Link } from 'react-router-dom'

function App() {
  // const copyEmail = () => {
  //   navigator.clipboard.writeText('andre.junior@sou.inteli.edu.br');
  //   alert('Email copied: ' + 'andre.junior@sou.inteli.edu.br');
  // }
  return (
    <>
      <div className='content-presentation'>
        <div className='box-presentation'>
          <div className='button-language'>
            <p className='language'>PT</p>
            <p>|</p>
            <p className='language'>EN</p>
          </div>
          <div className='presentation'>
            <p className='role'>
              Backend developer
            </p>
            <h1>
              Hi, my name is André Lessa
            </h1>
            <p className='details'>
              Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </p>
          </div>
        </div>
        <div>
          <Logo className='svg'></Logo>
        </div>
      </div>
      <div className='panel'>
        <h2>Projects</h2>
        <hr></hr>
        <div className='cards'>
          <Card imageUrl={Ael} imageDescription='Logo da empresa Ael' projectUrl='https://github.com/andlljr/Planejador-de-rotas-AEL'></Card>
          <Card imageUrl={Estapar} imageDescription='Logo da empresa Estapar' projectUrl='https://github.com/andlljr/EstarAgil'></Card>
          <Card imageUrl={Hurb} imageDescription='Logo da empresa Hurb' projectUrl='https://github.com/andlljr/Hurb-para-parceiros'></Card>
          <Card imageUrl={Usp} imageDescription='Logo do Hospital de Medicina da USP' projectUrl='https://github.com/andlljr/Smart-Health'></Card>
          <Card imageUrl={Stone} imageDescription='Logo da empresa Stone' projectUrl=''></Card>
        </div>
      </div>
      <div className='panel'>
        <h2>Skills</h2>
        <hr></hr>
        <div className='list'>
          <ul>
            <li> Spring Boot </li>
            <li> Node JS </li>
            <li> SQL </li>
          </ul>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> JavaScript </li>
          </ul>
          <ul>
            <li> React </li>
            <li> Java Swing </li>
            <li> Postgres </li>
          </ul>
          <ul>
            <li> AWS </li>
            <li> Figma </li>
          </ul>
        </div>
      </div>
      <footer>
        <div>
          <Link to={'https://github.com/andlljr'} target="_blank">
            <Github className='svg-contact'></Github>
          </Link>
          <Link to={'https://www.linkedin.com/in/andrelessajr/'} target="_blank">
            <Linkedin className='svg-contact'></Linkedin>
          </Link>
          <Link to={'https://mail.google.com/mail/?view=cm&to=andre.junior@sou.inteli.edu.br'} target="_blank">
            <Email className='svg-contact'></Email>
          </Link>
        </div>
        <p>André Lessa 2023</p>
      </footer>
    </>
  )
}

export default App;