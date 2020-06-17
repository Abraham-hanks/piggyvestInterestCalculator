const router = require('express').Router();
const interest = require('../controllers/interestController')

router.route('/piggybank').post(interest.piggyBankInterest);
router.route('/safelock').post(interest.safeLockInterest);
router.route('/target').post(interest.targetInterest);
router.route('/flex').post(interest.flexInterest);
router.route('/flexdollar').post(interest.flexDollarInterest);
router.route('/investify').post(interest.investifyInterest);

module.exports = router;