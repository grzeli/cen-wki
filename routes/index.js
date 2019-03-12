const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('home');
});
router.get('/80:7D:3A:5D:52:8A/', (req, res) => {
  res.send(
    'cenowki  OSKORY'
  );
});

module.exports = router;