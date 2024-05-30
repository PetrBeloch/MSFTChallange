// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Path: comments.js
// Create a new route that will return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: comments.js
// Create a new route that will return a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  } else {
    res.json(comment);
  }
});

// Path: comments.js
// Create a new route that will add a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    text: req.body.text,
  };
  comments.push(comment);
  res.json(comment);
});

// Path: comments.js
// Create a new route that will update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  } else {
    comment.text = req.body.text;
    res.json(comment);
  }
});

// Path: comments.js
// Create a new route that will delete a comment
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  } else {
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
  }
});

// Path: comments.js
// Listen on port 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Path: comments.js
// Define the comments array
const comments = [
  { id: 1, text: 'Hello, World!' },
  { id: 2, text: 'This is a comment.' },
  { id: 3, text: 'Another comment here.' },
];

// Path: server.js
// Import the comments