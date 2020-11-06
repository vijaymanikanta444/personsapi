import express from 'express';
const app = express();
import person from './routes/person';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use('/persons', person);

console.log(process.env.MONGODB_URL);
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log('connected to DB')
);

app.get('/', (req, res) => res.json({ name: 'vijay' }));

app.listen(8080, () => console.log('server started at 8080'));
