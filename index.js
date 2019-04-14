const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => res.json({info: 'NodeJS, express and postgres api'}))

app.listen(PORT, () => {
  console.log('App is running in port '+ PORT)
})
