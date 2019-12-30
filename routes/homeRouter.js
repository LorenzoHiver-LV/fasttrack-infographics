var router = require('express').Router();

router.route('/')
    .all((req,res) => {
        res.json({message : "Welcome to our app !!"});
    });

module.exports = router;