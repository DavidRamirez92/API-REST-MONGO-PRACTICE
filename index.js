import express from 'express';

const app = express(); //express server. 
const PORT = 3000; //port number.

app.get('/', (req, res) => {
    res.send(`servidor express corriendo en puerto ${PORT}`);
});

app.listen(PORT, () => {    
    console.log(`Servidor corriendo en puerto ${PORT}`);
})