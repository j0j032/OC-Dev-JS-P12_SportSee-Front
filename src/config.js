const provisionalConfig = () => {
	const setPort = process.env.REACT_APP_ENVIRONMENT === 'mockedApi' ? ['3001','18'] : ['3000','12']
	return {
		url: `http://localhost:${setPort[0]}/user/`,
		userId: setPort[1]
	}
}

export default provisionalConfig

