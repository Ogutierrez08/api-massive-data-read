const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const fdr = require('./lib/fileDataReader')

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

fdr.dataMemory(data => {
  require('./routes/routes')(app, data)
  app.listen('4000', () => {
    console.log('Server on port 4000')
  })
})
