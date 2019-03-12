const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.home);
router.get('/80:7D:3A:5D:52:8A/', PagesController.device1);

module.exports = router;