import { useState, useEffect } from 'react'
import axios from 'axios'



const setPort = () => process.env.REACT_APP_ENVIRONMENT === 'mockedApi' ? '3001' : '3000'
const userUrl = `http://localhost:${setPort()}/user/`

export const useGet = (endPoint, filter) => {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		axios
			.get(userUrl+endPoint)
			.then((response) =>
				setData(
					filter ? response.data[filter.method](filter.callback) : response.data.data
				)
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
