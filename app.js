// Request-Response handler file --> express application
const express=require('express')
const app=express() ;// express imported stored as a function in app
const bodyParser=require('body-parser')
const morgan=require('morgan')



/*1.   handling req and res from the express app
app.use((request,response) => {   //use function will help handle req res by using a call back inside it which gives value of request and an object to handle your response
    //response.status().json (object) --> object will be saved/converted as json sent to response
     response.status(200).json({msg:"hiiiiiiii guyzz"})
   })*/
 
//Default path is / 




//4. MIDDLEWARE --> this gets executed after the server starts running but before you manange your routes
        // 4.a) NODEMON- automates the server  -->going to start the server , will detect the changes in the code and will restart the server itself
        // it is a development dev middleware- jab tak code bnare hai tab tak we need it , untill we make it live on a server.


        // 4.b) BODY-PARSER- to parse incoming req.bodies , 
// Body parser urlencoded- returns middleware that only parses urlencoded bodies and only looks at request where the content-types header matches the type option
//extended:false-> req.body will only contain data in the form of string and array and in case of true then data can be in any type
app.use(bodyParser.urlencoded({extended:false}))       // this object will contain key-value pairs where the value can be string or array
app.use(bodyParser.json())
       // 4. c) morgan --> dev middleware-logger middleware -->for all requests it will create a log in the terminal
app.use(morgan('dev'))



//3. Routing by localhost:7001/users
const loginHandler= require('./api/routes/login')
const signupHandler= require('./api/routes/signup')

app.use('/users/login',loginHandler)
app.use('/users/signup',signupHandler)

/*app.use('/users',(req,res)=>{
    res.status(200).json({
        username:"DemoUsername",
        password:"DemoPassword"
    })
})*/





//2. Managing routes
app.use('/users',(req,res)=>{
    res.status(200).json({
        msg:"Get request to /users"
    })
})

module.exports=app;
