const express = require('express');
const Tags = require('../data/tags');


const router = express.Router();


router.get('/', (req, res) => {
  res.json(Tags);
});

module.exports = router;
