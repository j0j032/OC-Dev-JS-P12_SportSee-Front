import React from 'react'
import yogaIcon from '../assets/icons/yoga-icon.svg'
import swimIcon from '../assets/icons/swim-icon.svg'
import bikeIcon from '../assets/icons/bike-icon.svg'
import dumbellIcon from '../assets/icons/dumbell-icon.svg'

const LateralBar = () => {
	const date = Date.now()
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
