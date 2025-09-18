import consultae440nfc from '../controllers/consultae440nfc.js'; 
import express from 'express';

const router = express.Router();

router.get('/:codemp/:codfil/:codsnf/:numnfc/:codfor', consultae440nfc.carrega);

export default router;
