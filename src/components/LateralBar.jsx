import React from 'react'
import yogaIcon from '../assets/icons/yoga-icon.svg'
import swimIcon from '../assets/icons/swim-icon.svg'
import bikeIcon from '../assets/icons/bike-icon.svg'
import dumbellIcon from '../assets/icons/dumbell-icon.svg'
import PropTypes from 'prop-types'


/**
 * Component for showing the left vertical navigation
 * @returns {JSX.Element}
 */
const LateralBar = () => {
	const date = Date.now()
	
	/**
	 * To get the good copyright year each year
	 * @param {number} date
	 * @returns {string}
	 */
	const dateFormater = date => new Date(date).toLocaleDateString('fr-FR', {year: 'numeric'})
	
	return (
		<div className='lateralBar__container'>
			<div className='lateralBar__activity-icon--container'>
				<img className='lateralBar__activity-icon' src={yogaIcon} alt='activité 1'/>
				<img className='lateralBar__activity-icon' src={swimIcon} alt='activité 2'/>
				<img className='lateralBar__activity-icon' src={bikeIcon} alt='activité 3'/>
				<img className='lateralBar__activity-icon' src={dumbellIcon} alt='activité 4'/>
			</div>
			<p className='lateralBar__copyright'>{`Copyright Sportsee ${dateFormater(date)}`} </p>
		</div>
	)
}

export default LateralBar

LateralBar.propTypes = {
	date: PropTypes.number,
	dateFormater : PropTypes.string
}
