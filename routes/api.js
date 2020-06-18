const router = require('express').Router();
const shopItemController =  require('../controllers/shopItemController');


//actual route is /api/shopitems
router.route('/shopitems').get(shopItemController.findAll);

module.exports = router;