import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logos/sportSee-logo.svg'

const Header = () => {
	let userId
	process.env.REACT_APP_ENVIRONMENT === 'mockedApi' ? userId = '18' : userId = '12'
	return (
		<div className='header__container'>
				<ul className='header__nav'>
					<NavLink to='/home'>
						<img src={logo} alt='logo sportSee'/>
					</NavLink>
					<NavLink to='/home'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Accueil</li>
					</NavLink>
					<NavLink to={`/profil/user/${userId}`}
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Profil</li>
					</NavLink>
					<NavLink to='/settings'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Réglage</li>
					</NavLink>
					<NavLink to='/community'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Communauté</li>
					</NavLink>
				</ul>
		</div>
	)
}

export default Header
