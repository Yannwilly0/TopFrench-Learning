const express = require('express');
const encontroller = require('../controllers/encontroller');

const router = express.Router();

router.get('/',encontroller.getIndex);
router.get('/learn',encontroller.getLearn);
router.get('/about',encontroller.getAbout);
router.get('/practice',encontroller.getPractice);
router.get('/registration',encontroller.getRegistration);
router.get('/payment',encontroller.getPayment);
router.get('/login',encontroller.getLogin);
router.get('/classdetails',encontroller.getLearnDetails);
router.get('/practicedetails',encontroller.getPracticeDetails);
router.get('/a1-details',encontroller.getA1Details);
router.get('/a2-details',encontroller.getA2Details);
router.get('/b1-details',encontroller.getB1Details);
router.get('/b2-details',encontroller.getB2Details);
router.get('/c1-details',encontroller.getC1Details);
router.get('/c2-details',encontroller.getC2Details);
router.get('/contact-us',encontroller.getContactUs);


module.exports = router;