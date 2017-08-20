import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer : 42 });
});

app.get('/welcome', (req, res) => {
  res.render('welcome', { name : 'Poorna' });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
