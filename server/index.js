import app from './app'
import http from 'http'

const server = http.createServer(app)


server.listen(3001, function(){
  console.log('Server listening on port 3001')
})