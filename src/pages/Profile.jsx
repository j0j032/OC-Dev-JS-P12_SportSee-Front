import React from 'react'
import {useParams} from 'react-router-dom'
import {useGet} from '../CustomHooks/UseGet'
import Loader from '../components/Loader'
import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Activity from '../components/Activity'
import KeyInfo from '../components/KeyInfo'
import AverageSession from '../components/AverageSession'
import Performance from '../components/Performance'
import Goal from '../components/Goal'
import logo from '../assets/logos/sportSee-logo.svg'
import caloriesIcon from '../assets/icons/calories-icon.svg'
import proteinIcon from '../assets/icons/protein-icon.svg'
import carbsIcon from '../assets/icons/carbs-icon.svg'
import fatIcon from '../assets/icons/fat-icon.svg'
import PropTypes from "prop-types"
import Error404 from './Error404'
import provisionalConfig from '../config'


/**
 * Component for showing user dashboard (Profil in navbar)
 *
 * @component
 * @returns {JSX.Element} that contains user data and display every chart component
 */
const Profile = () => {
	const {id} = useParams()
	const userId = provisionalConfig().userId
	const userInfo = useGet(id)
	const userActivity = useGet(`${id}/activity`)
	const userSessions = useGet(`${id}/average-sessions`)
	const userPerf = useGet(`${id}/performance`)
	
	if (id === undefined || userId !== id) return (<div><Error404/></div>)
	if (userInfo.error || userActivity.error || userPerf.error || userSessions.error){
		return (
			<section className='oups'>
				<img src={logo}/>
				<p>Oups il y a eu un problème, veuillez rechargez la page 🙏</p>
			</section>
		)
	}
	
	const {userInfos, keyData, score, todayScore } = userInfo.data
	return (
		<div className='page-container'>
			<Header />
			<main className='main-container'>
				<LateralBar/>
				{userInfo.isLoading? (<Loader/>
					):(
						<div className='content' >
							<div className='content-profile'>
								<div className='welcome'>
									<h1>Bonjour <span>{`${userInfos.firstName}`}</span></h1>
									<p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
								</div>
								<div className='dashboard'>
									<div className='charts'>
										<Activity activityData={userActivity}/>
										<div className='secondary-charts-container'>
											<AverageSession sessionData={userSessions}/>
											<Performance perfData={userPerf}/>
											<Goal score={score || todayScore}/>
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
						</div>
					)
				}
			</main>
		</div>
	)
}

export default Profile

Profile.propTypes = {
	id: PropTypes.string,
	userinfo: PropTypes.object,
	userinfos: PropTypes.object,
	keyData: PropTypes.object,
	score: PropTypes.number,
	userActivity: PropTypes.object,
	userSessions: PropTypes.object,
	userPerf: PropTypes.object
}
