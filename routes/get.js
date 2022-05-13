module.exports = app => {;
    var router = require("express").Router();


  // test 
  // const jwt = require('jsonwebtoken');
  // const test1 = (req,res,next) =>{
  //     res.status(200).send({
  //       token: jwt.sign({id:7},'SECRET',{expiresIn:'24h'})
  //     })
  //   }
  //   const test2 = (req,res,next) =>{
  //         const token = req.headers.authorization.split(' ')[1];
  //         const decodedToken = jwt.verify(token, 'SECRET');
  //         const userId = decodedToken.id;
  //         console.log(userId);
  //     }
    // router.get('/client/test1',test1)
    // router.get('/client/test2',test2)    
    
    
    
    
    
    
    
    //Client : 
    //router.get('/client/connectiontatut',test)


  
  
  
    app.use('/get', router);
  };  