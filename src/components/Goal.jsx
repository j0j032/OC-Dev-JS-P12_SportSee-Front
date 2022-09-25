import React from 'react'
import {RadialBarChart, RadialBar, ResponsiveContainer,} from "recharts";

const Goal = ({score}) => {
	
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
