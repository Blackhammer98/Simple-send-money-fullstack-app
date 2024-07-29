const express = require("express");
const { signInValidation, userUpadate } = require("../validation");
const { signUpValidation } = require("../validation");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../authMiddleware");
const router = express.Router();

router.post("/signup", async function(req ,res){
      
    const signUpPayload = req.body;
    const parseSignUpPayload = signUpValidation.safeParse(signUpPayload);
    if (!parseSignUpPayload.success){
      return  res.status(411).json({
            msg:  "You  sent the wrong inputs"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg  : "User already exist"
        })
    }

   const user =  await User.create({
       username: signUpPayload.username,
       password: signUpPayload.password,
       firstName: signUpPayload.firstName,
       lastName: signUpPayload.lastName
    })

    const userId = user._id;

       await Account.create({
        userId,
        balance : 1+Math.random()*10000
    })
    const token = jwt.sign({
        userId
    },JWT_SECRET)

    res.status(200).json({
        msg : "SignUp Completed!",
        token : token
    })
})

router.post("/signin", async function (req, res) {

    const createSignInPayload = req.body;
    const parseSignInPayload = signInValidation.safeParse(createSignInPayload);
    if (!parseSignInPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET);

        res.json({
            token : token,
            msg : "user signed in  successfully "
        })
        return;
    }

    res.status(411).json({
        msg:"Error while logging in"
    })

})

router.put("/",authMiddleware ,async function(req,res,){
    const createPayload = req.body;
    const parsePayload = userUpadate.safeParse(createPayload);
    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "Error while updating information"
        })
    }

    const user = await User.updateOne(
        {_id : req.userId},req.body)

        return res.json({
            msg : "Updated Successfully"
        })
})

router.get("/finduser" , async function(req,res){
    const filter = req.query.filter || "";
     const users = await User.find({
        $or:[{
            firstName : {
                "$regex" : filter 
            }       
        },{
            lastName: {
                "$regex": filter
            } 
        }]
     })

     return res.json({
        user : users.map(user=>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
     })
})


module.exports = router;