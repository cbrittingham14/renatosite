const router = require('express').Router();
const shopItemController =  require('../controllers/shopItemController');


//actual route is /api/shopitems
router.route('/shopitems').get(shopItemController.findAll);

// /api/addnew
router.route('/addnew').post(shopItemController.addNew);

router.route('/regex/:query').get(shopItemController.regexSearch);

module.exports = router;