import { useState, useEffect } from 'react'
import axios from 'axios'
import provisionalConfig from '../config'
import PropTypes from 'prop-types'

/**
 * Custom Hook for api calls
 * @param {string} endPoint To set the routePath (without common url so start after <url>/user/)
 * to get the data you need.
 * @returns {{isLoading: {boolean}, data: {object}, error: {boolean}}}
 * @example
 * const userActivity useGet(id+'/activity')
 * Then you can use userActivity.data || userActivity.error || userActivity.isLoading
 */
export const useGet = (endPoint) => {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const userRoute = provisionalConfig().url
	
	useEffect(() => {
		setLoading(true)
		axios
			.get(userRoute+endPoint)
			.then((response) => setData(response.data.data))
			.catch((error) => {console.log(error)
				setError(error)
			})
			.finally(() => setLoading(false))
	}, [])
	
	return { isLoading, data, error }
}

useGet.propTypes= {
	isLoading: PropTypes.bool,
	error:PropTypes.bool,
	data:PropTypes.object,
	userRoute: PropTypes.string,
	endPoint: PropTypes.string
}
