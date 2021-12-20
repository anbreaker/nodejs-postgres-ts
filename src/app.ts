import express, { json } from 'express';
import morgan from 'morgan';

// Routes
import userRoutes from './routes/user.routes';

// Initializations
export const app = express();

//middlewares
app.use(morgan('dev'));

// format json to object
app.use(express.json());
// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', userRoutes);
