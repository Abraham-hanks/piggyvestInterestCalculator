const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoute');
let port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to my app</h1>");
})

app.use('/api/interest', authRoutes)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})