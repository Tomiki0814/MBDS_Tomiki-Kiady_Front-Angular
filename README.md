# MBDSMagascar2022_2023_front

## Lancement du projet

Pour lancer le projet en locale:
- Cloner le repository puis installer les dependances avec `npm install`
- Lancer le [Back-end](https://github.com/Tomiki0814/MBDS_Tomiki-Kiady_Front-Angular) en locale
- Entrer dans le fichier 'app/shared/services/api.service.ts' et choisissez un domaine
- Il y a 2 domaines: locale et celui deployé il faut commenter ce que vous n'utiliser pas. Par defaut c'est l'url du back-end déja deployé qui sera utilisé
- Lancer `ng serve` pour lancer le projet. Ouvrir ensuite l'URL affiché

## A propos du projet

Pour faire le projet on a utilisé des composants issus de [Angular material](https://material.angular.io). 
Chat Gpt nous a aussi été d'un grande aide ainsi que des tutoriel sur youtube.

### Hébergement

- Le site est hébergé sur [render.com](https://mbds-assignement-front-end.onrender.com)

### Login
- On a inserer les utilisateur dans mongo.
- On a creer deux profils d'utilisateur: Admin et simple utilisateur.
- Un ADMIN aura la possibilité de modifier et supprimer un assignement
- Un utilisateur normal pourra juste consulter l'application sans pouvoir faire des modifications.
- On utilise l'api login pour se connecter

- Voici les login des utilisateurs:
  - ADMIN: {username:"Tomiki",mdp:"admin"}
  - SIMPLE: {username:"Kiady",mdp:"kiady"}

### Les fonctionnalités présent dans le projet

#### Gestion des devoirs

- Arrivé sur la page d'accueil on a listé les devoirs sous forme de card.
- l'affichage est divisée en 2, à gauche la liste des devoirs à rendre et à droite les devoirs déja rendu.
- Un devoir est représenté par un card avec ***le nom du devoir, le nom de la matière, l'image de la matière, le nom de l'élève, ainsi que la date de rendu***.
- Pour rendre un devoir il suffit de faire un drag and drop sur le devoir et ***un modal apparaitra pour inserer la note et les remarques***.
- La note doit être compris entre 0 et 20
- On peut annuler un devoir en faisant un drag and drop dans devoir rendu vers la liste des devoirs à rendre
- Pour voir les détails d'un devoir il faut cliquer sur le card.
- On peut également modifier et supprimer un devoir.
- A noter que dans les details seul l'ADMIN verra les boutons supprimer, modifier et annuler.


#### Fonctionnalités en plus
- Affichage liste des étudiants
- On peut sélectionner un étudiant pour voir ses notes. 
- Liste des Matieres.
- On peut selectionner une matiere pour voir tous les devoirs des etudiants sur ce dernier.


## Notre équipe
- S.RAMANANTSOA Andrianina Tomiki n°59
- RAKOTOHARINJATOVO kiady n°25
