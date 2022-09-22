import React from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Activity from '../components/Activity'
import {useGet} from '../components/useGetDatas'
import Loader from '../components/Loader'
import KeyInfo from '../components/KeyInfo'
import caloriesIcon from '../assets/icons/calories-icon.svg'
import proteinIcon from '../assets/icons/protein-icon.svg'
import carbsIcon from '../assets/icons/carbs-icon.svg'
import fatIcon from '../assets/icons/fat-icon.svg'

const Profile = () => {
	
	const {id} = useParams()
	
	const {data , isLoading, error} = useGet(id)
	const {userInfos, keyData} = data
	
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return (
		<div className='page-container'>
			<Header />
			<main className='main-container'>
				<LateralBar/>
				{isLoading? (<Loader/>
					):(
						<div className='content content-profile'>
							<div className='welcome'>
								<h1>Bonjour <span>{`${userInfos.firstName}`}</span></h1>
								<p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
							</div>
							<div className='dashboard'>
								<div className='charts'>
									<Activity/>
									<div>
										OtherCharts
									</div>
								</div>
								<div className='key-infos__container'>
									<KeyInfo className='key-info' keyData={keyData.calorieCount} img={caloriesIcon} unit={'kCal'} category={'Calories'}/>
									<KeyInfo className='key-info' keyData={keyData.proteinCount} img={proteinIcon} unit={'g'} category={'Proteines'}/>
									<KeyInfo className='key-info' keyData={keyData.carbohydrateCount} img={carbsIcon} unit={'g'} category={'Glucides'}/>
									<KeyInfo className='key-info' keyData={keyData.lipidCount} img={fatIcon} unit={'g'} category={'Lipides'}/>
								</div>
							</div>
						</div>
					)
				}
			</main>
		</div>
	)
}

export default Profile


/*console.log(process.env.REACT_APP_ENVIRONMENT)
	
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/activity`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/average-sessions`).then((res) => console.log(res))
	}, [])
	
	useEffect(() => {
		axios.get(`http://localhost:3001/user/${id}/performance`).then((res) => console.log(res))
	}, [])*/
