import "core-js";
import "regenerator-runtime/runtime";
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));


app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }),
bodyParser.json()
);

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(express.static(path.join(__dirname, '/../client/src')));

app.use('/api/v1/', routes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});






export default app;