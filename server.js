const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const app = express()

// Configuring .env globally
dotenv.config(
    {
        path: '.env'
    }
)

//  Declaring API PORT  for connection
const PORT = process.env.PORT || 3000

// Log Request down to the console
app.use(morgan('tiny'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    // res.header("Äccess-Control-Allow-Methods",  "POST, GET, DELETE, PUT, PATCH")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

//  Enabling Cross-Origin Resource Sharing 
app.use(cors())

// Parse Request to the Body Parser
app.use(bodyparser.urlencoded({
    extended: true
}))

//  Parse form Data
app.use(bodyparser.json())

// Load routes
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})