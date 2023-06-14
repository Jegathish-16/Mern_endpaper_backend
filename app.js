require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3500;
const signUp = require('./routes/signUpRoute');
const login = require('./routes/loginRoute');
const userData = require('./routes/userDataRoute')
const  mongoose = require('mongoose');
const cors = require('cors')

app.use(cors())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(errorMessage)=>console.log(errorMessage))
db.once('open',()=>console.log('Connected successfully to the database.....'))

app.use(express.json())

app.get('/',(request,response)=>{
    response.send(`It's working.....`)
})

app.use('/api/v1/signup', signUp)
app.use('/api/v1/login',login)
app.use('/api/v1/userdata',userData)
app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}`))