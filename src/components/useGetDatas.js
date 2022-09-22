import { useState, useEffect } from 'react'
import axios from 'axios'
import provisionalConfig from '../config'

const userRoute = provisionalConfig().url

export const useGet = (endPoint) => {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		axios
			.get(userRoute+endPoint)
			.then((response) => setData(response.data.data)
			
			)
			
			.catch((error) => {
				console.log(error)
				setError(error)
			})
			.finally(() => setLoading(false))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return { isLoading, data, error }
}
