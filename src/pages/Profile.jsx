import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Activity from '../components/Activity'
import ActivityD3 from '../components/ActivityD3'
import {useGet} from '../components/useGetDatas'
import Loader from '../components/Loader'

const Profile = () => {
	const {id} = useParams()
	
	const {data , isLoading, error} = useGet(id)
	console.log(data, isLoading, error)
	
	const {userInfos} = data
	
	/*console.log(process.env.REACT_APP_ENVIRONMENT)
	
	const url = `http://localhost:3000/user/${id}`
	useEffect(() => {
		axios.get(url).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/activity`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/average-sessions`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/performance`).then((res) => console.log(res))
	}, [])*/
	
	return isLoading ? (
		<Loader/>
	) : (
		<div className='page-container'>
			<Header />
			<main className='main-container'>
				<LateralBar/>
				<div className='content content-profile'>
					<ActivityD3/>
					<h1>{`Hello ${userInfos.firstName}`}</h1>
					<Activity/>
				</div>
			</main>
		</div>
	)
}

export default Profile
