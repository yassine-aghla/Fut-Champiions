# Gestion d'Équipe de Football ⚽

## Description
Cette application permet de créer, gérer et optimiser une équipe de football. L'utilisateur peut ajouter des joueurs via un formulaire dynamique, adapter la formation de l'équipe, calculer le score de "chimie" entre les joueurs, et sauvegarder ou récupérer les données localement. L'application est conçue pour garantir une gestion efficace et conforme à la structure d'une équipe de football.

---

## Fonctionnalités Principales

### 1. **Création d'une Équipe de 11 Joueurs**
- Ajouter des joueurs via un **formulaire dynamique** contenant les champs :
  - Nom
  - Position (RW, LW, CM, etc.)
  - Statistiques (Pace, Shooting, Passing, etc.)
- **Modifier** ou **supprimer** un joueur ajouté.
- Limitation à **11 joueurs maximum** par équipe.
- Validation des données saisies pour garantir leur conformité.

---

### 2. **Adaptation de la Formation**
- Choisir entre des formations prédéfinies :
  - `4-4-2`
  - `4-3-3`
  - Autres formations populaires.
- Positionnement des joueurs mis à jour automatiquement selon la formation choisie.
- Seuls les postes valides pour la formation sont disponibles pour chaque joueur.

---

### 3. **Sauvegarde et Récupération des Données**
- Les données de formation et d'équipe sont **stockées localement** .
- Récupération automatique des données au chargement de l'application pour éviter toute perte.

---

### 4. **Formulaire Dynamique pour les Joueurs**
- Création dynamique de nouveaux joueurs via une interface utilisateur intuitive.
- L'interface ajuste automatiquement :
  - Les positions disponibles.
  - Le nombre de joueurs restants à ajouter.

---

## Technologies Utilisées
- **HTML5** : Structure de l'application.
- **CSS3 (ou Tailwind CSS)** : Design et style des composants.
- **JavaScript** : Logique dynamique et interactions.
- **LocalStorage** : Sauvegarde locale des données.

---



