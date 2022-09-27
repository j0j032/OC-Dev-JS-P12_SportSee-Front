import React from 'react'
import {RadialBarChart, RadialBar, ResponsiveContainer,} from "recharts";
import PropTypes from 'prop-types'

/**
 * Component to display the user goal score chart using Recharts library
 * @param {number} score
 * @returns {JSX.Element}
 * [Recharts RadialBarChart doc]{@link  https://recharts.org/en-US/api/RadialBarChart}
 */
const Goal = ({score}) => {
	
	/**
	 * Method to embed the score in a recharts readable Data
	 * if user hasn't got score then we set the score to 0
	 * The second object of the array (index[1]) is a ref for 100% and compare the user score
	 * @returns {array} of {{object} {title: {string}, score: {number}, fill:{string}}}
	 */
	const formatData = () => {
		return [
			{title:'Score', score: score? score*100 : 0, fill:"#FF0000"},
			{title:'Score', score:100, fill:"#FBFBFB"}
		]
	}
	
	return (
		<div className='goal-container'>
				<h6>{formatData()[0].title}</h6>
				<span>{`${formatData()[0].score}%`}<br/><p> de votre objectif</p></span>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={formatData()}>
					<RadialBar
						minAngle={0}
						background
						clockWise
						dataKey='score'
						cornerRadius={10}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Goal

Goal.propTypes = {
	formatData:PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		score: PropTypes.number,
		fill: PropTypes.string,
	}))
}
