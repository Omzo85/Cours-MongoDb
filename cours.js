/*


install xcode et homebrew si besoin :  xcode-select --install

brew tap mongodb/brew
brew install mongodb-community@8.0
brew services start mongodb-community@8.0
brew services list (pour verifier)
mogosh

   //////////////01-installation
pour ios https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
----
Pour Windows
Rendez-vous sur le site officiel de MongoDB : 
https://www.mongodb.com/try/download/community.

Sélectionnez la version appropriée à votre système d'exploitation.
Téléchargez et installez MongoDB.
Pour Windows, choisissez l'option d'installation complète.
**********Activez l'option "Install MongoDB as a Service".******
mettre les dossier data et  à la racine (c:\data et C:\log)
)

MongoDB est une base de données NoSQL orientée document qui stocke les données sous forme de documents JSON-like (BSON en interne).
une base de données est un conteneur global pour stocker plusieurs collections.
Elle regroupe toutes les collections qui partagent un but ou un contexte commun

Caractéristiques principales :
Flexible : Pas de schéma strict, les documents peuvent varier.
Performant : Bien adapté pour les applications avec des besoins de haute disponibilité et de grandes quantités de données.
Intégration facile avec Node.js grâce à Mongoose.
les commandes crud courante sont :
    User.create
    User.find({})
    User.findByIdAndUpdate()
    User.findByIdAndDelete(id)

Mongoose est une bibliothèque ODM (Object Data Modeling) pour MongoDB, 
Elle permet de :
    Définir des schémas pour structurer les données
    Valider les données avant insertion
    Effectuer des requêtes sur la base de données
    Gérer les relations entre les documents
   
    */
