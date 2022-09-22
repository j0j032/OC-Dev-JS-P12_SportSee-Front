import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from './Loader'

const AverageSession = ({sessionData}) => {
	const {id} = useParams()
	const {data, isLoading, error} = sessionData
	console.log(data.sessions)
	
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='average-container'>
		</div>
	)
}

export default AverageSession
