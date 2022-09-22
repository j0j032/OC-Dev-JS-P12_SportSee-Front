import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useParams} from 'react-router-dom'
import {useGet} from './useGetDatas'
import Loader from './Loader'



const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="desc">{`${payload[0].value}kg`}</p>
				<p className="desc">{`${payload[1].value}cal`}</p>
			</div>
		);
	}
	
	return null;
};


const Activity = () => {
	
	const {id} = useParams()
	const {data, isLoading, error} = useGet(`${id}/activity`)
	console.log(data, isLoading, error)
	
	const {userId} = data
	console.log(userId)
	
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='Test'>
			<p>{userId}</p>
			<ResponsiveContainer title= "Activité quotidienne" width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data.sessions}
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
					<YAxis dataKey="kilogram"
						   yAxisId="kilogram"
						   domain={["dataMin-2", 'dataMax+1']}
						   dx={15}
						   tickCount= "3"
						   tickLine={false}
						   tick={{fontSize:14}}
						   orientation='right'
					/>
					<YAxis dataKey="calories"
						   yAxisId="calories"
						   type='number'
						   hide={true}
					/>
					<Tooltip labelFormatter={()=>""}
							 cursor={{fill:"#DFDFDF", opacity:"0.6"}}
							 content={<CustomTooltip kg={data.sessions[0].kilogram}/>}
					/>
					<Legend layout="horizontal"
							verticalAlign="top"
							align="right"
							iconType="circle"
							formatter={(value)=><span className='legend-text'>{value}</span> }
					/>
					<Bar dataKey="kilogram"
						 yAxisId="kilogram"
						 fill="black"
						 radius={[10,10,0,0]}
						 barSize={10}/>
					<Bar dataKey="calories"
						 yAxisId="calories"
						 fill="red"
						 radius={[10,10,0,0]}
						 barSize={10} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity

