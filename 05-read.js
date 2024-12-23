/*

  La lecture des documents dans une base de données MongoDB est une opération essentielle lorsque vous travaillez avec Mongoose. 
Mongoose fournit plusieurs méthodes pour récupérer les documents dans une collection MongoDB. 
Voici les principales :
    a. User.find() Récupére plusieurs documents correspondant à un filtre.
        Exemple :
            User.find({ age: { $gte: 18 } }) // Trouve les utilisateurs de 18 ans et plus
            .then(users => console.log('Utilisateurs trouvés :', users))
            .catch(err => console.error('Erreur lors de la recherche :', err));
            { age: { $gte: 18 } } signifie : age supérieur ou égal à 18.
            Si aucun filtre n'est spécifié (User.find({})), tous les documents sont récupérés.
    
    b. User.findOne() Récupére un seul document correspondant au filtre.
        Retourne le premier document trouvé qui correspond au filtre.
        Exemple :
            User.findOne({ email: 'alice@example.com' }) // Trouve un utilisateur par email
            .then(user => console.log('Utilisateur trouvé :', user))
            .catch(err => console.error('Erreur lors de la recherche :', err));

    c. User.findById() Trouve un document par son identifiant unique (_id).
        Chaque document dans MongoDB possède un champ unique _id automatiquement généré.
        Exemple :     
            User.findById('64aee63e74f8ad001efb529b') // Trouve un utilisateur par son _id
            .then(user => console.log('Utilisateur trouvé par ID :', user))
            .catch(err => console.error('Erreur lors de la recherche :', err));


*/ 
//faire les connexions sur les modules 
const express = require ('express');
const mongoose = require ('mongoose');
const connectDB = require("./serveur.js");
const User = require ("./usermodel.js")
const port = 3000;

connectDB();

// Retourne uniquement les champs "name" et "email"
User.find({}, 'name email') 
    .then(users => console.log('Utilisateurs trouvés :', users))
    .catch(err => console.error('Erreur lors de la recherche :', err));



/* Connexion à la base de données MongoDB locale
connectDB()

app.get('/', (req, res) => {
    User.find({}, 'nom email')
        .then(users => {
            users.forEach(user => {
                console.log(`Nom: ${user.nom}, Email: ${user.email}`);
            });
            res.send(users);
        })
        .catch(err => console.error('Erreur lors de la récupération des utilisateurs:', err));



});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});

*/
