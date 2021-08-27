const express = require('express');
const router = express.Router();
const quoteFunctions = require('../controllers/quoteController');

router.get('/', (req, res) => {
  res.send('It works!');
});

router.get('/quotes', quoteFunctions.listAllQuotes)
router.post('/quotes', quoteFunctions.createQuote)

// router.get('/users/:userId', userFunctions.findUser)
// router.delete('/users/:userId', userFunctions.deleteUser)
// router.put('/users/:userId', userFunctions.updateUser)


module.exports = router;