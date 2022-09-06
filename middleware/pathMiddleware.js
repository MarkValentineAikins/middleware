const pathMiddleware = (req, res, next) =>{
    console.log("Global Middleware Started");
    next();
        console.log("Globsl Middleware ended");
}

module.exports ={
    pathMiddleware,
};

