import { createServer} from 'miragejs'
import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/data'


	const createMockedApi = () => {
	
		createServer({
			routes() {
				this.urlPrefix = 'http://localhost:3001'
				this.namespace = 'user'
				
				this.get('/:id', (schema, request) => {
					const id = parseInt(request.params.id)
					return {
						data: USER_MAIN_DATA
							.find((user) => user.id === id),
					}
				})
				this.get('/:id/activity', (schema, request) => {
					const id = parseInt(request.params.id)
					return {
						data: USER_ACTIVITY
							.find(userActivity => userActivity.userId === id),
					}
				})
				this.get('/:id/average-sessions', (schema, request) => {
					const id = parseInt(request.params.id)
					return {
						data: USER_AVERAGE_SESSIONS
							.find(userActivity => userActivity.userId === id),
					}
				})
				this.get('/:id/performance', (schema, request) => {
					const id = parseInt(request.params.id)
					return {
						data: USER_PERFORMANCE
							.find(userPerformance => userPerformance.userId === id),
					}
				})
			}
		})
	}

	export default createMockedApi
