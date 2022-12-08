// creating router
const express=require('express')
const router=express.Router()   // router is an interface provided  by express

//home route for this will be localhost:7001/users/login which we already mentioned in app js file therefore no need to write it here
router.get('/',(req, res)=>{
    res.status(200).json({
        msg:"get request to /users/login"
    })
})

router.get('/:variableId',(req, res)=>{ 
    const queryParam=req.params.variableId      //: colon is put inorder to make variableid actually a variable - colon kehra h ki variableid as it is ni print krna yeh placeholder hai
    res.status(200).json({                      //the query parameter is the variable whose value is passed in the URL at the end
        msg:`get request to /users/login/${queryParam}`
    })
})

//any data sent over the POST  request is carried in the body and data coming from it will come in the form of req body
router.post('/',(req, res)=>{
    const userId=req.body.id
    const userpassword=req.body.password
    res.status(200).json({
        //msg:"post request to /users/login"
        msg:'POST SUCCESSFULLY' , details:`userId: ${userId} , password:${userpassword}`
    })
})

router.patch('/',(req, res)=>{
    res.status(200).json({
        msg:"patch request to /users/login"
    })
})

router.delete('/',(req, res)=>{
    res.status(200).json({
        msg:"delete request to /users/login"
    })
})


module.exports=router; // not exported as app file