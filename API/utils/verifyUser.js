import errorHandler from './error.js'
import jwt from 'jsonwebtoken'




export const veryfyToken=(req,res,next)=>{
    
const token=req.cookies.access_token

if(!token) return next (errorHandler(401,'unauthorized'))

jwt.verify(token,"vickybe",(err,user)=>{
    if(err) return next(errorHandler(403,'Forbiden'))

    req.user=user
    next()
})
}
