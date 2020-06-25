const router = require('express').Router();
const shopItemController =  require('../controllers/shopItemController');


//actual route is /api/shopitems
router.route('/shopitems').get(shopItemController.findAll);

router.route('/clothing').get(shopItemController.findClothing);

router.route('/jewelry').get(shopItemController.findJewelry);

// /api/addnew
router.route('/addnew').post(shopItemController.addNew);

router.route('/regex/:query').get(shopItemController.regexSearch);

module.exports = router;