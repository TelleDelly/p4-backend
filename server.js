//Imports and required
const express = require('express')
const cors = require('cors')
const passport = require('passport') 

require('./middleware/auth')

//Controller imports
const statePolicyController = require('./controllers/statePolicyController')
const userController = require('./controllers/userLogSign')
const userGet = require('./controllers/userGet')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
// app.use(bodyParser.urlencoded({extended: false}))

app.use('/statepolicy', statePolicyController)
app.use('/users', userController)
app.use('/userget', passport.authenticate('jwt', {session: false}) ,userGet)



const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})