import React from 'react'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
const InProgress = () => {
	return (
		<div className='page-container'>
			<Header/>
			<main className='main-container'>
				<LateralBar/>
				<div className='content'>
					<h1>Work in progress 👷‍♂️</h1>
				</div>
			</main>
		</div>
	)
}

export default InProgress
