const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

router.get('/', (req, res) =>{
    res.render("pages/index",{
        title: "Hello World",
    });
});
router.post('/', urlencoded, (req, res) =>{
    const { data } = req.body ?? {};
    console.log("Data received : ", data);
});
module.exports= router;