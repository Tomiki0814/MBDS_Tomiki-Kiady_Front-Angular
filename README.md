# AssignmentApp

## Lancement du projet

Pour lancer le projet en locale:
- Cloner le repository puis installer les dependances avec `npm install`
- Lancer le [Back-end](https://github.com/Tomiki0814/MBDS_Tomiki-Kiady_Front-Angular) en locale
- Entrer dans le fichier 'app/shared/services/api.service.ts' et choisissez un domaine
- Il y a 2 domaines: locale et celui deployé il faut commenter ce que vous n'utiliser pas. Par defaut c'est l'url du back-end déja deployé qui sera utilisé
- Lancer `ng serve` pour lancer le projet. Ouvrir ensuite l'URL affiché

## Nos contributions sur le projet

Pour faire le projet on a utilisé des composants issus de [Angular material](https://material.angular.io). 
Pour le design on s'est inspiré des designs sur [dribbble](https://dribbble.com) mais aucun template n'a été utilisé.

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

- Arrivé sur la page home on a listé les devoirs sous forme de card.
- Un devoir est représenté par un card avec ***le nom du devoir, le nom de la matière, l'image de la matière, le nom de l'élève, la date de rendu ainsi que la photo du professeur***.
- Un devoir qui n'est pas encore rendue sera afficher avec l'option `rendre`
- Pour rendre un devoir il suffit de cliquer sur rendre et ***un modal apparaitra pour inserer la note et les remarques***.
- Pour voir les détails d'un devoir on clique sur le card.
- A noter que dans les details seul l'ADMIN verra les boutons supprimer et modifier

#### Fonctionnalités en plus
- On peut sélectionner un étudiant pour voir ses notes. 
- On peut selectionner une matiere pour voir tous les devoirs sur ce dernier.



## Notre équipe
- S.RAMANANTSOA Andrianina Tomiki n°59)
- RAKOTOHARINJATOVO kiady n°25)
