import e440nfcRoutes from '../src/routes/e440nfcRoutes.js';
import defaultRoutes from '../src/routes/defaultRoutes.js';
import express from 'express';
const app = express();

app.use(express.json());
app.use('/e440nfc', e440nfcRoutes);
app.use('/', defaultRoutes);

export default app;

