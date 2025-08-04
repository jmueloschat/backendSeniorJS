import e440nfcRoutes from '../src/routes/e440nfcRoutes.js';
import express from 'express';
const app = express();

app.use(express.json());
app.use('/e440nfc', e440nfcRoutes);

export default app;

