//Imports and required
const express = require('express')
const cors = require('cors')
const passport = require('passport') 
const morganMiddleware = require('./middleware/morgan.middleware')

require('./middleware/auth')

//Controller imports
const statePolicyController = require('./controllers/statePolicyController')
const userController = require('./controllers/userLogSign')
const secureController = require('./controllers/secureRoutes')
const storyController = require('./controllers/StoryController')
const reviewController = require('./controllers/ReviewController')
const clinicController = require('./controllers/ClinicController')
const logger = require('./utils/logger')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morganMiddleware)
// app.use(bodyParser.urlencoded({extended: false}))

app.use('/statepolicy', statePolicyController)
app.use('/users', userController)
app.use('/stories', storyController)
app.use('/secure', passport.authenticate('jwt', {session: false}) ,secureController)
app.use('/reviews', reviewController)
app.use('/clinics', clinicController)


const port = process.env.PORT || 4000

app.get('/status', (req, res) => {
    logger.info('Checking API status')
    res.status(200).send({
        status: 'UP',
        message: "The api is up and running"
    })
})

app.listen(port, () => {
    logger.info(`Server is running on ${port}`)
})