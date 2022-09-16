import {createServer} from 'miragejs'
import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/data'

createServer({
	routes() {
		this.namespace = 'user'
		
		this.get('/:id', (schema, request) => {
			const id = parseInt(request.params.id)
			return {
				data: USER_MAIN_DATA
					.find((user) => user.id === id),
			}
		})
		this.get('/:id/activity', (schema, request)=>{
			const id = parseInt(request.params.id)
			return {
				data: USER_ACTIVITY
					.filter(userActivity => userActivity.userId === id),
			}
		})
		this.get('/:id/average-sessions', (schema, request)=>{
			const id = parseInt(request.params.id)
			return {
				data: USER_AVERAGE_SESSIONS
					.filter(userActivity => userActivity.userId === id),
			}
		})
		this.get('/:id/performance', (schema, request)=>{
			const id = parseInt(request.params.id)
			return {
				data: USER_PERFORMANCE
					.filter(userPerformance => userPerformance.userId === id),
			}
		})
		
	}
})
