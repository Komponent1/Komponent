import express from 'express';
import path from 'path';

const app = express();
const port = 5000

app.use(express.static(path.resolve(__dirname, '../public')));
const react = path.resolve(__dirname, '../public/react/index.html');
const vanilla = path.resolve(__dirname, '../public/vanilla/index.html')
const router = express.Router();
router.get('/vanilla/*', (req, res) => {
  res.sendFile(vanilla);
});
router.get('/react/*', (req, res) => {
  res.sendFile(react);
});
app.use(router);

app.listen(port, () => {
  console.log('connect');
})

/*
  send의 경우 동작하지 않으나 sendFile의 경우 동작함
*/
