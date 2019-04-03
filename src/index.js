import '@babel/polyfill';
import debug from 'debug';
import app from './app';

require('dotenv').config();

const logger = debug('log');
const PORT = process.env.PORT || 9000;

app.listen(PORT);

logger(`Find me on http://localhost:${PORT}`);