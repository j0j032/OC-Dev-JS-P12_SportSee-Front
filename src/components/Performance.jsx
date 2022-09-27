import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Loader from './Loader'
import PropTypes, {object} from 'prop-types'
import Activity from './Activity'

/**
 * To add padding between the chart and labels
 * @param {array} payload
 * @param {number} x
 * @param {number} y
 * @param {number} cx
 * @param {number} cy
 * @param {object} rest
 * @returns {JSX.Element}
 * [StackOverflow Ressource]{@link https://stackoverflow.com/questions/65447592/recharts-is-there-a-way-to-add-a-padding-between-the-chart-and-labels-for-rada }
 */
const CustomTicks = ({payload, x, y, cx, cy, ...rest}) => {
	return (
		<text {...rest} y={y + (y-cy)/8} x={x+ (x- cx)/82}>
			{payload.value}
		</text>
	)
}

/**
 * Component to display the Performance chart using Recharts library
 * @param {object} perfData
 * @returns {JSX.Element}
 * [Recharts RadarChart doc]{@link  https://recharts.org/en-US/api/RadarChart}
 */
const Performance = ({perfData}) => {
	const {data, error, isLoading} = perfData
	const kindInFrench = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

//  To get original data in english
//	const {kind} = data
//	const formatData = () => data.data.map((item, index)=>({name:kind[index+1], value: item.value}))
	
	/**
	 * To translate the labels in French using kindInFrenchArray
	 * @returns {array} of {{object} {name: {string}, value: {number}}}
	 */
	const formatData = () => data.data.map((item, index)=>({name:kindInFrench[index], value: item.value}))
	
	if (error) return <span>Oups ! il y a eu un problème</span>
	return isLoading ? (<Loader/>) : (
		<div className='perf-container'>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart data={formatData().reverse()}
							cx="50%" cy="50%"
							outerRadius="55%"
							margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dataKey="name"
									stroke='#fffefc'
									tick={<CustomTicks cx={100} cy={70}/>}
									tickLine={false}
									dy={0}
					/>
					<Radar dataKey="value"
						   fill="red"
						   fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance

Activity.propTypes = {
	perfData: PropTypes.object,
	isLoading: PropTypes.bool,
	error:PropTypes.bool,
	data:PropTypes.object,
	kindInFrench:PropTypes.array,
	formatData:PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string, //After formating (before formating Proptype = string (date))
		value: PropTypes.number,
	}))
}
