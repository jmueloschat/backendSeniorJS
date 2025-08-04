import e440nfcControllers from '../controllers/e440nfcControllers.js';
import express from 'express';

const router = express.Router();

router.get('/:codemp/:codfil/:codsnf/:numnfc/:codfor', e440nfcControllers.getId);

export default router;

