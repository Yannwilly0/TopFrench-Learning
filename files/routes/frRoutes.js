const express = require('express');
const frcontroller = require('../controllers/frcontroller');

const router = express.Router();

router.get('/',frcontroller.getAcceuil);
router.get('/apprendre',frcontroller.getApprendre);
router.get('/Apropos',frcontroller.getApropos);
router.get('/pratique',frcontroller.getPratique);
router.get('/enregistrement',frcontroller.getEnregistrement);
router.get('/paiement',frcontroller.getPaiement);
router.get('/connect',frcontroller.getConnect);
router.get('/nous-contacter',frcontroller.getContacter);
router.get('/classesdetails',frcontroller.getClassesDetails);
router.get('/pratiquedetails',frcontroller.getPractiqueDetails);
router.get('/a1-details',frcontroller.getA1Details);
router.get('/a2-details',frcontroller.getA2Details);
router.get('/b1-details',frcontroller.getB1Details);
router.get('/b2-details',frcontroller.getB2Details);
router.get('/c1-details',frcontroller.getC1Details);
router.get('/c2-details',frcontroller.getC2Details);


module.exports = router;