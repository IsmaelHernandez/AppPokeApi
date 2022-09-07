import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameMaestro } from '../store/slices/nameMaestro.slice'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const nameValue = e.target.name.value.trim()
    if(nameValue !== ''){
      dispatch(setNameMaestro(nameValue))
      navigate('/pokedex')
    }
    // console.log('valor es: '+ e.target.name.value.trim()+'espacio' )
  }
  return (
    // <section>

      <article className='card-home'>
          <header className='card-home__header'>
              <h2 className='card-home__header--title'>Hello Trainer!</h2>
          </header>
          <img className='card-home__header--img'src="./img/ash1.png" alt="" />
          <footer className='card-home__footer'>
              <h3 className='card-home__footer--description'>Give me your name to start!!</h3>
              <form onSubmit={handleSubmit} className='card-home__footer--body'>
                <input type="text" id='name' className='card-home__footer--input' />
                <button className='card-home__footer--btn' type='submit'><i className="fa-brands fa-get-pocket"></i></button>
              </form>
          </footer>
   
      </article>

    // </section>
  )
}

export default Home