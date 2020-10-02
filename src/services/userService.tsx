import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8090/api/v1/users'

class  UserService {
  getUsers(){
      axios.get(USERS_REST_API_URL
      )
  }
}

export default new UserService();