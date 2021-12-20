import express, { json } from 'express';
import morgan from 'morgan';

// Initializations
export const app = express();

// format json
app.use(json());

//middlewares
app.use(morgan('dev'));

// routes
