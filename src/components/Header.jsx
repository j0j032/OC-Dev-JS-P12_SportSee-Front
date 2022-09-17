import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logos/sportSee-logo.svg'

const Header = () => {
	return (
		<div className='header-container'>
			<NavLink to='/'>
			<img src={logo} alt='logo sportSee'/>
			</NavLink>
			<nav>
				<ul className='header__nav'>
					<NavLink to='/'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Accueil</li>
					</NavLink>
					<NavLink to={`/profil/user/:id`}
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>A propos</li>
					</NavLink>
					<NavLink to='/'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Accueil</li>
					</NavLink>
					<NavLink to='/'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Accueil</li>
					</NavLink>
				</ul>
			</nav>
			
		</div>
	)
}

export default Header
