const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} 

app.use(routes);


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
};
mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/shamanicDB'), mongooseOptions);

app.listen(PORT, () => console.log(`API server listening at http://localhost:${PORT}`));