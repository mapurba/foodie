const jwt = require('jsonwebtoken');


// check if Token exists on request Header and attach token to request as attribute
exports.checkTokenMW = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                 req.authData = authData;
                next();
            }
        })
    } else {
        res.sendStatus(403);
    }
};



// Issue Token
exports.signToken = (req, res,redirect_uri) => {
    jwt.sign({userId: req.user._id, email:req.user.email}, 'secretkey', {expiresIn:'60 min'}, (err, token) => {
        if(err){
            res.sendStatus(500);
        } else {

            let redirect_uri = 'http://localhost:3000/#/feed';
            res.cookie('acccessToken', token);
            res.redirect(redirect_uri);
        }
    });
}