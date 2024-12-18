const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

async function connectTotestDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
        console.log('Connexion à MongoDB réussie !');
    } catch (err) {
        console.log('Connexion à MongoDB échouée !', err);
    }
};
connectTotestDB();


app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});