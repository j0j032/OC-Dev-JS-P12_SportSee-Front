import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logos/sportSee-logo.svg'
import provisionalConfig from '../config'
import PropTypes from 'prop-types'

/**
 * Component for showing the header and navigation
 * @returns {JSX.Element}
 */
const Header = () => {
	const userId = provisionalConfig().userId
	
	return (
		<div className='header__container'>
			<ul className='header__nav'>
				<NavLink to='/'>
					<img src={logo} alt='logo sportSee'/>
				</NavLink>
				<NavLink to='/' end
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

Header.propTypes = {
	userId: PropTypes.string
}
