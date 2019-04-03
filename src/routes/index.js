import express from 'express';
import RandomNumber from '../controllers/RandomNumber';
import { tsConstructSignatureDeclaration } from '@babel/types';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200)
    .json({ 
      success: true,
      message: 'Random Phone Number Generator' });
});

router.get(
  '/numbers',
  RandomNumber.getSavedNumbers
);

router.post(
  '/random',
  RandomNumber.createNumbers
);

// A catch-all routes
router.use('*', (req, res) =>
  res.status(404).json({
    message: 'That url does not exist on this server 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫',
  }));


export default router;