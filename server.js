const express = require('express');
const app = express();
const routes = ['/', '/about', '/portfolio', '/contact'];

app.use(express.static('public'));

routes.map(route => {
  app.get(route, (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
});

app.listen(3000, () => {
  console.log('Server is stared @ 3000');
});
