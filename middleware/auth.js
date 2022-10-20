const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";

const auth = (req, res, next) => {

    try {
        
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.user_id = user.id;
        }
        else{
            // res.status(401).json({message: "Unauthorized User"});
            res.redirect('/login');
        }

        next();

    } catch (error) {
        console.log(error);
        // res.status(401).json({message: "Unauthorized User"});
        res.redirect('/login');
    }

}

module.exports = auth;