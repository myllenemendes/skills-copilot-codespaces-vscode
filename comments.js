// Create web server

//Require the express module
const express = require('express');
//Create an instance of express
const app = express();
//Declare a port the server will listen to
const port = 3000;
//Require the body-parser module
const bodyParser = require('body-parser');

//Use the body-parser middleware
app.use(bodyParser.json());

//Declare an array to store the comments
const comments = [];

//Create a POST route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment added');
});

//Create a GET route to get all the comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

//Create a GET route to get a comment by its id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  res.send(comment);
});

//Create a PUT route to update a comment by its id
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  comments[id] = newComment;
  res.send('Comment updated');
});

//Create a DELETE route to delete a comment by its id
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.send('Comment deleted');
});

//Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});