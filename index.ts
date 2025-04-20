import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api', (req, res) => {
    res.json({ message: 'Hello from POST!' });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})