// creating router
const express=require('express')
const router=express.Router()   // router is an interface provided  by express

router.get('/',(req, res)=>{            // GET -reading the data from database
    res.status(200).json({
        msg:"get request to /users/signup"
    })
})

//email, password will be expected from the user
//NODEJS  donot have direct access to req.body object *****important
router.post('/',(req, res)=>{           // post request - write data 

    const useremail=req.body.email      // left side value- just a variable right side value is in the request
    const userpassword= req.body.password

    const userdetails={          //object made 
        email:useremail,
        password:userpassword
    }
    res.status(200).json({
        msg:"Signup Successfully" , details:userdetails
        //msg:"post request to /users/signup"
    })
})

router.patch('/',(req, res)=>{
    res.status(200).json({
        msg:"patch request to /users/signup"
    })
})

router.delete('/',(req, res)=>{
    res.status(200).json({
        msg:"delete request to /users/signup"
    })
})



module.exports=router; // not exported as app file