// import session from "express-session";
// console.log(session);
const sessionctl ={
    async createSession(req,res,next){
        try {
            var usersinfo = req.session.usersinfo
            if (!usersinfo) {
                // req.session.views++
                
                res.setHeader('Content-Type', 'application/json')
                // res.write('<p>views: ' + req.session.usersinfo + '</p>')
                // res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
                // res.end()
              } else {
                req.session.usersinfo
                res.end('welcome to the session demo. refresh!')
              }
            
              console.log(  req.session.usersinfo);
            return res.json(201).send(usersinfo,{success:'user info session store'})
        } catch (error) {
            return next(new Error(error))
        }
    }
}

export default sessionctl;