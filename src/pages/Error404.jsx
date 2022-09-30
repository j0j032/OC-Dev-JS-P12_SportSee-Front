import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logos/sportSee-logo.svg'

const Error404 = () => {
	return (
		<div className='page-container'>
			<main className='main-container error'>
				<div className='content error-container'>
					<img src={logo} alt='logo sportSee'/>
					<h1> Error404</h1>
					<p>Désolé, la page que vous demandez n'existe pas !</p>
					<NavLink to={`/`}>
						<button className='error-404-back-link'>Retour à l'accueil</button>
					</NavLink>
				</div>
			</main>
		
		</div>
	)
}

export default Error404
