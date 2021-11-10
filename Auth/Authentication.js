require('dotenv').config()
const jwt = require('jsonwebtoken')



module.exports = function(req,res,next){
    const header = req.header('Authorization')
    if(!header) return res.status(401).send('Access denied.')
    const token = header.split(' ')[1]
   
     try {
         jwt.verify(token, process.env.TOKEN_SECRET)
         next()
     } catch (error) {
        return res.status(500).send('Invalid token')
     }
 }
 