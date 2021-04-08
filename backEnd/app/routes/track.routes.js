var express = require('express')
const router = express.Router();
expressValidator = require('express-validator')
var trackController =require('../controller/track.controller')
router.use(expressValidator())

router.post('/',trackController.createRecord);
router.get('/',trackController.average);

module.exports = router