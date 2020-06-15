const express = require('express');
const Comments = require('../data/comments');

const router = express.Router();


// Get a list of comments
router.get('/', (req, res) => {
  res.json(Comments);
});

module.exports = router;
