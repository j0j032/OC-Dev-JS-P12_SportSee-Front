import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from './Loader'
import PropTypes, {object} from 'prop-types'

/**
 * Set a custom infos when hover the chart
 * @param {array} payload
 * @param {boolean} active
 * @returns {JSX.Element|null}
 */
const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}cal`}</p>
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
			<div className="custom-legend">
				<h3>Activité quotidienne</h3>
				<div className='bar-legend'>
					<p>Poids (kg)</p>
					<p>Calories brulées (kCal)</p>
				</div>
			</div>
		);
};


/**
 * Component to display the Activity chart using Recharts library
 * @param {object} activityData
 * @returns {JSX.Element}
 * [Recharts BarChart doc]{@link  https://recharts.org/en-US/api/BarChart}
 */
const Activity = ({activityData}) => {
	const {data, isLoading, error} = activityData
	
	/**
	 * Method to replace the default Xaxis data (date) by numbers (1,2,3....) using index
	 * @returns {object}
	 */
	const formatData = () => {
		const {sessions} = data
		return sessions.map((item, index)=>({day:index+1, poids: sessions[index].kilogram, cals: sessions[index].calories}))
	}
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='activity-container'>
			<ResponsiveContainer title= "Activité quotidienne" width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={formatData()}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3"
								   vertical={false}
					/>
					<XAxis dataKey= "day"
						   dy={15}
						   tickCount="7"
						   tickLine={false}
						   tick={{fontSize:14}}
					/>
					<YAxis dataKey="poids"
						   yAxisId="poids"
						   axisLine={false}
						   domain={["dataMin-2", 'dataMax+1']}
						   dx={14}
						   tickCount= "3"
						   tickLine={false}
						   tick={{fontSize:14}}
						   orientation='right'
					/>
					<YAxis dataKey="cals"
						   yAxisId="cals"
						   type='number'
						   hide={true}
					/>
					<Legend layout="horizontal"
							content={<CustomLegend/>}
							verticalAlign="top"
							
					/>
					<Tooltip labelFormatter={()=>""}
							 cursor={{fill:"#DFDFDF", opacity:"0.6"}}
							 content={<CustomTooltip />}
							 wrapperStyle={{outline:'none'}}
					/>
					<Bar dataKey="poids"
						 yAxisId="poids"
						 fill="black"
						 radius={[10,10,0,0]}
						 barSize={10}
					/>
					<Bar dataKey="cals"
						 yAxisId="cals"
						 fill="red"
						 radius={[10,10,0,0]}
						 barSize={10}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity

CustomTooltip.propTypes = {
	payload: PropTypes.array,
	active: PropTypes.bool
}

Activity.propTypes = {
	activityData: PropTypes.object,
	isLoading: PropTypes.bool,
	error:PropTypes.bool,
	data:PropTypes.object,
	formatData:PropTypes.arrayOf(PropTypes.shape({
		day: PropTypes.number,
		calories: PropTypes.number,
		kilogram: PropTypes.number,
	}))
}
