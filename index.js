import express from 'express';
import {router} from './routes/routes.js'
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;
dotenv.config();


let app = express();
app.use(express.json());
app.use(bodyParser.text());
app.use(express.static(path.resolve(__dirname, './view/build')));

app.use('/root', router)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/build', 'index.html'));
  });

app.listen(PORT, ()=> console.log("Server Started on port "+ PORT));