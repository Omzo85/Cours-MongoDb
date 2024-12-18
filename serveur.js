
const mongoose = require('mongoose');



////////////////////////////////////////////////////////
// Connexion à la base de données MongoDB locale

const connectDB = async  () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
        console.log('Connexion à MongoDB réussie !');
    } catch (err) {
        console.log('Connexion à MongoDB échouée !', err);
    }
};
module.exports = connectDB










