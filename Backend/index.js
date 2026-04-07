import expres from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = expres();

app.use(cors());
app.use(expres.json());

app.get('/', (req,res)=> {
    res.send('API is running');
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
