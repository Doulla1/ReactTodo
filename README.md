# Todo List Project

Ce projet est une application de liste de tâches (Todo List) développée avec React. Il a été initialement bootstrappé avec [Create React App](https://github.com/facebook/create-react-app).

## Améliorations Apportées

1. **Configuration ESLint et Prettier** :
   - Ajout de ESLint et Prettier pour maintenir un code propre et cohérent.
   - Utilisation de Husky et lint-staged pour exécuter automatiquement les vérifications de linting et de formatage avant chaque commit.

2. **Utilisation de Bootstrap** :
   - Intégration de Bootstrap pour améliorer le style et la présentation des composants.
   - Utilisation de classes Bootstrap pour styliser les boutons, les cartes et les champs de texte.

3. **Composants Fonctionnels** :
   - Convertir les composants de classe en composants fonctionnels pour éviter d'avoir à gérer le `this`, simplifier le code, utiliser plus facilement les hooks tout en respectant les bonnes pratiques React.

4. **Gestion de l'État avec Hooks** :
   - Utilisation de `useState` pour gérer l'état local des composants.

5. **Tests Unitaires** :
   - Ajout de tests unitaires avec Jest et React Testing Library pour vérifier le bon fonctionnement des composants.

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir les erreurs de lint dans la console.

### `npm test`

Lance le test runner en mode interactif.\
Voir la section sur [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.\
Il regroupe correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Voir la section sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Note: cette opération est irréversible. Une fois que vous `eject`, vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez `eject` à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul responsable.

## Comment Lancer le Projet

1. **Cloner le dépôt** :
   ```sh
   git clone https://github.com/votre-utilisateur/todo-list.git
   cd todo-list
2. Installer les dépendances :
   ```sh
   npm install
3. Lancer l'application :
   ```sh
   npm start
4. Exécuter les tests :
    ```sh
    npm test