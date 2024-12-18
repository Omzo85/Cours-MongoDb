const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number }
});
////////////////////////////

// Création du Modèle basé sur le Schéma défini
const User = mongoose.model('User', userSchema);

module.exports = User