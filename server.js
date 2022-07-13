const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const statePolicyController = require('./controllers/statePolicyController')
const userController = require('./controllers/userController')
const app = express()
require('./middleware/auth')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
// app.use(bodyParser.urlencoded({extended: false}))

app.use('/statepolicy', statePolicyController)
app.use('/users', userController)



const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})