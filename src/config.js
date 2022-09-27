import PropTypes from 'prop-types'

/**
 * DEVELOPPEMENT ENV ONLY
 * This method set a user in terms of a localHost port in terms of the mock api or the micro
 * provisional api using cross-env.
 * So you can work on both backend and have a different user for each env.
 * @returns {{userId: {string}, url: {string}}}
 */
const provisionalConfig = () => {
	const setPort = process.env.REACT_APP_ENVIRONMENT === 'mockedApi' ? ['3001','18'] : ['3000','12']
	return {
		url: `http://localhost:${setPort[0]}/user/`,
		userId: setPort[1]
	}
}

export default provisionalConfig

provisionalConfig.propTypes = {
	url: PropTypes.string,
	userId : PropTypes.string
}
