import React from 'react'
import Loader from './Loader'
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import PropTypes, {object} from 'prop-types'
import Activity from './Activity'

/**
 * Set a custom infos when hover the chart
 * @param {array} payload
 * @param {boolean} active
 * @returns {JSX.Element|null}
 */
const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<div className="custom-tooltip--sessions">
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null
};

/**
 * Set a custom legend
 * @returns {JSX.Element}
 */
const CustomLegend = () => {
	return (
		<div className="custom-legend--sessions">
			<p>Durée moyenne des sessions</p>
		</div>
	);
};

/**
 * Component to display the Average sessions chart using Recharts library
 * @param {object} sessionData
 * @returns {JSX.Element}
 * [Recharts LineChart doc]{@link  https://recharts.org/en-US/api/LineChart}
 */
const AverageSession = ({sessionData}) => {
	const {data, isLoading, error} = sessionData
	const days = ["L","M","M","J","V","S","D"]
	
	/**
	 * Method to replace the default Xaxis data (numbers) by days of the week (L,M,M...) using
	 * days array
	 * @returns {array} of {{object} {day: {string}, length: {number}}}
	 */
	const formatData = () => days.map((item, index) => ({day: item, length: data.sessions[index].sessionLength}))
	
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='sessions-container'>
			<div className='WEE'></div>
			<div className='WE'>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width="100%" height="100%"
							   data={formatData()}
							   margin={{ top: 10, right: 15, left: 15, bottom: 10 }}>
						<XAxis dataKey="day"
							   stroke='#fffefc'
							   tickLine={false}
							   axisLine={false}
							   tick={{fontSize:12, opacity:0.6}}
						/>
						<YAxis hide={true} padding={{top: 80,bottom:40}}/>
						<Tooltip content={<CustomTooltip />}
								 cursor={{
									 strokeOpacity:0,
								 }}
								 wrapperStyle={{outline:'none'}}
						/>
						<Legend verticalAlign='top'
								content={<CustomLegend/>}
						/>
						<Line dataKey="length"
							  type="natural"
							  stroke="#FFF"
							  strokeWidth={1.5}
							  dot={false}
							  activeDot={{
								  stroke: "#FFF",
								  strokeOpacity: 0.4,
								  strokeWidth: 10,
							  }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default AverageSession

CustomTooltip.propTypes = {
	payload: PropTypes.array,
	active: PropTypes.bool
}

Activity.propTypes = {
	sessionData: PropTypes.object,
	isLoading: PropTypes.bool,
	error:PropTypes.bool,
	data:PropTypes.object,
	days:PropTypes.array,
	formatData:PropTypes.arrayOf(PropTypes.shape({
		day: PropTypes.string, //After formating (before formating Proptype = string (date))
		length: PropTypes.number,
	}))
}
