const { Router} =  require('express');
const router = Router();

const { getbtn } = require('../controllers/index.controller');

router.get('/getbtn',getbtn);



module.exports = router;