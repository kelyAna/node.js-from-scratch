import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('server running')

  return response.end()
})

server.listen(3333)