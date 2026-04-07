import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req,res)=> {
    res.send('API is running');
})


import userRouter from './routes/user.routes.js';

app.use('/api/v1', userRouter);
app.use('/api/v1', userRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
