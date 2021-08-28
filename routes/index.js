const express = require('express');
const router = express.Router();
const quoteFunctions = require('../controllers/quoteController');
const numberFunctions = require('../controllers/numberController');

router.get('/', (req, res) => {
  res.send('It works!');
});

router.get('/quotes', quoteFunctions.listAllQuotes)
router.post('/quotes', quoteFunctions.createQuote)
router.put('/quotes', quoteFunctions.resetUsed)

router.get('/quotes/:quoteId', quoteFunctions.findQuote)
router.put('/quotes/:quoteId', quoteFunctions.updateQuote)

router.get('/numbers', numberFunctions.listAllNumbers)
router.post('/numbers', numberFunctions.createNumber)

router.put('/numbers/:numberId', numberFunctions.updateNumber)


module.exports = router;