import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Profile = () => {
	
	const {id} = useParams()
	
	/*const url = 'http://localhost:3000/user/18'
	useEffect(() => {
		axios.get(url).then((res) => console.log(res.data))
	}, [])*/
	
	useEffect(() => {
		axios.get(`/user/${id}`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`/user/${id}/activity`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`/user/${id}/average-sessions`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`/user/${id}/performance`).then((res) => console.log(res))
	}, [])
	
	return (
		<div>
			<h1>Hello Profile</h1>
		</div>
	)
}

export default Profile
