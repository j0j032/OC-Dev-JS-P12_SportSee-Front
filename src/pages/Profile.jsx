import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Activity from '../components/Activity'

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
		<div className='page-container'>
			<Header/>
			<main className='main-container'>
				<LateralBar/>
				<div className='content content-profile'>
					<h1>Hello prenom</h1>
					<Activity/>
				</div>
			</main>
		</div>
	)
}

export default Profile
