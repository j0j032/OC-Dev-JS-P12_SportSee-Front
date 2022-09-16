import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Profile = () => {
	
	const {id} = useParams()
	
	/*const url = 'http://localhost:3000/user/18'
	useEffect(() => {
		axios.get(url).then((res) => console.log(res.data))
	}, [])*/
	
	const url = `/user/${id}`
	console.log(url)
	useEffect(() => {
		axios.get(url).then((res) => console.log(res.data))
	}, [])
	
	return (
		<div>
			<h1>Hello Profile</h1>
		</div>
	)
}

export default Profile
