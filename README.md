# Vintage Veloce - E-Commerce de Voitures Classiques

Bienvenue dans le projet **Vintage Veloce**, un site web de vente et location de voitures de collection.

## 🚗 Fonctionnalités principales

- Affichage de la collection de voitures (images + vidéos)
- Système d'inscription et de connexion des utilisateurs
- Ajout d'une voiture au panier ou achat direct
- Formulaire de contact
- Interface d’administration possible (à développer)

## 🧱 Technologies utilisées

- **Frontend** : HTML, CSS, JavaScript
- **Backend** : PHP (avec mysqli)
- **Base de données** : MySQL
- **Serveur local** : XAMPP / MAMP / WAMP

## ⚙️ Installation

1. Clone ou télécharge ce dépôt :
https://github.com/AmiraSarah-Ch/Cars-website.git

2. Place le dossier dans le répertoire `htdocs/` de XAMPP (ou équivalent).

3. Ouvre phpMyAdmin et importe le fichier `database.sql` fourni dans le projet.

4. Modifie les informations de connexion dans `database.php` si nécessaire :
```php
$conn = new mysqli("localhost", "root", "", "nom_de_ta_base");
Démarre Apache et MySQL depuis XAMPP.

Accède au projet via :

arduino

http://localhost/vintage-veloce/html/index.php
