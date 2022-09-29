import React from 'react'
import {RadialBarChart, RadialBar, ResponsiveContainer,PolarAngleAxis,Legend} from "recharts";
import PropTypes from 'prop-types'

/**
 * Component to display the user goal score chart using [Recharts RadialBarChart]{@link  https://recharts.org/en-US/api/RadialBarChart}
 *
 * @component
 * @param {number} score user goal score
 * @returns {JSX.Element}
 */
const Goal = ({score}) => {
	
	const formatData = [{score}]
	
	const RenderLegend = () => {
		const userScore = formatData[0].score
		return (
			<div className="score-container">
				<span className="score">{userScore ? userScore * 100 : 0}%</span>
				<div><p className="description">de votre objectif</p></div>
			</div>
		)
	}
	
	return (
		<div className='goal'>
				<h3>Score</h3>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="90%"
					barSize={15}
					data={formatData}
					startAngle={score?90:0}
					endAngle={450}
				>
					<PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
					<RadialBar
						minAngle={15}
						clockWise
						dataKey="score"
						fill="red"
						cornerRadius={20}
					/>
					<Legend
						width={120}
						height={120}
						layout="vertical"
						verticalAlign="middle"
						align="center"
						content={<RenderLegend />}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Goal

Goal.propTypes = {
	formatData:PropTypes.arrayOf(PropTypes.shape({
		score: PropTypes.number,
	}))
}
