import { Request, Response } from 'express';
import app from './app';
import './config/setup';

const PORT = 3000;

app.get('/', async (_req: Request, res: Response) => res.send('Online'));
app.listen(PORT, () => console.log('Server running on port 3000'));