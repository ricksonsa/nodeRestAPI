var app = require('./config/custom-express')();

app.listen(3000, () => {
  console.log('listening on port 3000');
});
