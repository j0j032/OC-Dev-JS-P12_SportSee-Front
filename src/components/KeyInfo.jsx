import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to display a user key info
 * @param {number} keyData
 * @param {string} img
 * @param {string} unit
 * @param {string} category
 * @returns {JSX.Element}
 */
const KeyInfo = ({keyData, img, unit,category }) => {
	return (
		<div>
			<div className='key-info__container'>
				<img className='key-info__icon' src={img} alt='Calories'/>
				<div className='key-info__value'>
					<h5>{keyData + unit}</h5>
					<p>{category}</p>
				</div>
			</div>
		</div>
	)
}

export default KeyInfo

KeyInfo.propTypes = {
	keyData: PropTypes.number,
	img: PropTypes.string,
	unit: PropTypes.string,
	category: PropTypes.string,
}
