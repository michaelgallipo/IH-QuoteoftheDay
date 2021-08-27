const express = require('express');
const router = express.Router();
const quoteFunctions = require('../controllers/quoteController');

router.get('/', (req, res) => {
  res.send('It works!');
});

router.get('/quotes', quoteFunctions.listAllQuotes)
router.post('/quotes', quoteFunctions.createQuote)

router.get('/quotes/:quoteId', quoteFunctions.findQuote)
// router.delete('/users/:userId', userFunctions.deleteUser)
router.put('/quotes/:quoteId', quoteFunctions.updateQuote)


module.exports = router;