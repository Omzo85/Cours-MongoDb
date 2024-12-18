

/*
//////////////////04-create.js

/** insérer un utilisateur dans une base de données MongoDB 

L’ajout d’un utilisateur dans une base de données MongoDB suit trois grandes étapes :
    Définir un Schéma qui décrit la structure des documents utilisateurs.
    Créer un Modèle pour interagir avec la collection associée.
    Utiliser le Modèle pour insérer un nouvel utilisateur.
 
Pour ajouter un utilisateur:
    On utilise les méthodes du Modèle pour effectuer les opérations souhaitées (ajout dans ce cas).
    utilisez la méthode .create() du Modèle. Elle insère un document dans la collection.

User.create({ nom: 'benjamin', email: 'benjamin@example.com', age: 23 })
    .then(user => console.log('Utilisateur ajouté :', user))
    .catch(err => console.error('Erreur lors de l\'ajout :', err));
 
    ****Points importants
Validation des données :
    Les champs marqués comme required ou unique dans le Schéma sont automatiquement vérifiés.
    Une erreur sera générée si un document ne respecte pas le Schéma.
Gestion des erreurs :
    Les erreurs comme l’ajout d’un email déjà existant ou l’absence d’un champ obligatoire sont gérées avec le bloc .catch().
 */

/*
Utilisez le modèle User pour ajouter un utilisateur avec les informations suivantes :
Nom : Alice,
Email : alice@example.com,
Âge : 25.
Affichez un message dans la console une fois l’ajout réussi.*/


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
////////////////////////////////////////////////////////
// Connexion à la base de données MongoDB locale

async function connectTotestDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
        console.log('Connexion à MongoDB réussie !');
    } catch (err) {
        console.log('Connexion à MongoDB échouée !', err);
    }
};
connectTotestDB()

// Définition d'un Schéma Mongoose pour la collection "users"
const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number }
});
////////////////////////////

// Création du Modèle basé sur le Schéma défini
const User = mongoose.model('User', userSchema);

////////////////////////////
// User.create() :    
// Utilise le modèle User pour ajouter un nouvel utilisateur dans la collection users de la base de données testDB.
// Le paramètre est un objet contenant les informations de l'utilisateur.
User.create({
    nom: 'Alice',
    email: 'alice@example.com', // Email unique
    age: 25
})
    .then(dataFromDB => console.log('Utilisateur ajouté avec succès :', dataFromDB))
    .catch(err => console.error('Erreur lors de l\'ajout de l\'utilisateur :', err));

//  Afin de sortir la liste des users
  //  User.find({}, 'name email') // Retourne uniquement les champs "name" et "email"
    //.then(users => console.log('Utilisateurs trouvés :', users))
    //.catch(err => console.error('Erreur lors de la recherche :', err));



//  then() : Si l'ajout est réussi, affiche un message de confirmation ainsi que les informations de l'utilisateur ajouté.
// .catch() : Capture les erreurs éventuelles, comme une violation de contrainte (exemple : un email déjà existant).
//////////////////////


app.get('/', (req, res) => {
    res.send('Serveur Express connecté à MongoDB');
});


User.find();

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});


