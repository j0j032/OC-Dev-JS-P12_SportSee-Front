import React from 'react'
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from 'recharts'
import Loader from './Loader'
import PropTypes from 'prop-types'

/**
 * To add padding between the chart and labels
 * [StackOverflow Ressource]{@link https://stackoverflow.com/questions/65447592/recharts-is-there-a-way-to-add-a-padding-between-the-chart-and-labels-for-rada }
 * @param {array} payload
 * @param {number} x position
 * @param {number} y position
 * @param {number} cx position
 * @param {number} cy position
 * @param {object} rest position
 * @returns {JSX.Element}
 */
const CustomTicks = ({payload, x, y, cx, cy, ...rest}) => {
	return (
		<text {...rest} y={y + (y - cy) / 8} x={x + (x - cx) / 82}>
			{payload.value}
		</text>
	)
}
/**
 * Component to display the Performance chart using [Recharts RadarChart]{@link  https://recharts.org/en-US/api/RadarChart}
 *
 * @component
 * @param {Object} perfData
 * @property {Boolean} isLoading true loader display / false component mounted
 * @property {Object} data
 * @property {Array.<{value: number, kind:number }>}  data.data
 * @property {{number: String}} data.kind to set property key
 * @property {number} data.userId
 * @returns {JSX.Element}
 */
const Performance = ({perfData}) => {
	const {data, isLoading} = perfData
	const kindInFrench = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
	
	/**
	 * Performance formatData Method to translate the labels in French using kindInFrenchArray
	 * @method formatData
	 * @returns  {Array.<{name: string, value: number}>}
	 */
	const formatData = () => data.data.map((item, index) => ({
		name: kindInFrench[index],
		value: item.value
	}))
	//  To get original data (english)
	//	const {kind} = data
	//	const formatData = () => data.data.map((item, index)=>({name:kind[index+1], value: item.value}))
	
	return isLoading ? (<Loader/>) : (
		<div className='perf-container'>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart data={formatData().reverse()}
				            cx='50%' cy='50%'
				            outerRadius='55%'
				            margin={{top: 15, right: 15, left: 15, bottom: 15}}>
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dataKey='name'
					                stroke='#fffefc'
					                tick={<CustomTicks cx={100} cy={70}/>}
					                tickLine={false}
					                dy={0}
					/>
					<Radar dataKey='value'
					       fill='red'
					       fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}


export default Performance

Performance.propTypes = {
	perfData: PropTypes.object,
	isLoading: PropTypes.bool,
	data: PropTypes.object,
	kindInFrench: PropTypes.array,
	formatData: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string, //After formating (before formating Proptype = string (date))
		value: PropTypes.number
	}))
}
