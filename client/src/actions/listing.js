import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'


export function getListing(id) {
  axios.get('/listings/'+ id).then(resp => {
    console.log("establishment", resp.data[0])
    store.dispatch({
      type: 'GET_LISTING', 
      establishment: resp.data[0]
    })
  })
}