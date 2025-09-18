import e440nfcRoutes from '../src/routes/e440nfcRoutes.js';
import consultae440nfcRoute from '../src/routes/consultaE440nfcRoute.js';
import defaultRoutes from '../src/routes/defaultRoutes.js';
import express from 'express';
import cors from "cors";
const app = express();


/*
const allowedOrigins = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://192.168.0.10:8080', // exemplo de IP interno
  'https://meusistema.com.br'
];

// configuração dinâmica
app.use(cors({
  origin: function (origin, callback) {
    // se não tiver origin (ex.: curl ou Postman) ou se estiver na lista, libera
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

*/

app.use(express.json());
app.use(cors());
app.use('/e440nfc', e440nfcRoutes);
app.use('/consulta/e440nfc', consultae440nfcRoute);
app.use('/', defaultRoutes);

export default app;

