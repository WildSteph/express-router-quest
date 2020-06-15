const express = require('express');
const Posts = require('./routes/posts');
const comments = require('./routes/comments');
const Tags =require('./routes/tags');

const app = express();
const port = 8000;

app.use('/api/comments', comments);
app.use('/api/posts', Posts);
app.use('/api/tags', Tags);
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
