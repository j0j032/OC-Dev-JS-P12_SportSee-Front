import React from 'react'

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
