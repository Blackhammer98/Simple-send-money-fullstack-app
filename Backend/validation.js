const zod = require("zod")

const signUpValidation  = zod.object({
    firstName  :zod.string(),
    lastName  : zod.string(),
    username : zod.string().email(),
    password : zod.string()
})

const signInValidation = zod.object({
    
    username: zod.string().email(),
    password: zod.string()
})
const userUpadate = zod.object({
    password: zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
    
})

module.exports = {
    signInValidation : signInValidation , 
    signUpValidation: signUpValidation ,
    userUpadate: userUpadate   
}