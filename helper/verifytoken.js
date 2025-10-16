const jwt = require('jsonwebtoken');

async function verifyToken(req,res, next){
    const token = req.header('token');

    if(!token)
    {
        return res.status(401).json({error:"Access denied"});
    }
    try{
        const decoded = jwt.verify(token,'123');
        req.id = decoded.id;
        
        next();
    }
    catch(err){
        console.log("err", err); 
        res.status(401).json({err:"invalid token"})
    }

}

module.exports = verifyToken;