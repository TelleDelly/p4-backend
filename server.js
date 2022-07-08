const express = require('express')
const cors = require('cors')
const statePolicyController = require('./controllers/statePolicyController')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/statepolicy', statePolicyController)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})