import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();

import indexRoutes from './routes/index'
// Settings
app.set('port', process.env.port || 8080);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// This folder save photos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
