import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useGet} from './useGetDatas'
import Loader from './Loader'

const AverageSession = () => {
	const {id} = useParams()
	const {data, isLoading, error} = useGet(`${id}/average-sessions`)
	console.log(data, isLoading, error)
	/*const {sessions} = data
	useEffect(()=>{
	console.log(sessions[1].sessionLength)
	},[])*/
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='average-container'>
			{data.userId}
		</div>
	)
}

export default AverageSession
