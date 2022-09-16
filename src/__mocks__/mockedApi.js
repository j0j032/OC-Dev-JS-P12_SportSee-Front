import {createServer} from 'miragejs'
import {USER_MAIN_DATA} from '../data/data'
createServer({
	routes() {
		this.get('/user/18', () => {
			return USER_MAIN_DATA.find(user =>user.id === 18)
		})
	}
})
