// middleware for handling user authentication auth
const {User} = require('../db/index');


function userMiddleware(req,res,next){
   const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username : username,
    password : password,
  }).then((user)=> {
    if(user){
        next();
    }
    else{
        res.status(403).json({msg : "User not found"});
    }
  })
}