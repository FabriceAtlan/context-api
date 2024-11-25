# React Intermédiaire 02 - Context API

## Information

- Le **CodeSandbox** de la quête ne fonctionnant pas, j'ai créé un projet `React` en **locale** et `push` sur **GitHub**.

Pour tester ce projet, faites les comandes suivantes dans votre terminal :

```bash
git clone git@github.com:FabriceAtlan/context-api.git

cd context-api

npm install

npm run dev
```

## Challenge

Dans ce défi, tu vas réaliser une application simple qui changera le statut de l'utilisateur en un clic !

- **fork** le code suivant ;

- Dans `UserContext.js`, créez un contexte `UserContext` ;

- Crée un state `isOnline` dans `App.js` (par défaut défini sur `false`) avec `useState` ;

- Importe le contexte dans `App.js` et utilise un `Provider` ;

- Passe un objet avec `isOnline` et `setIsOnline` comme valeur pour le `Provider` ;

- Dans `UserProfile.js`, consomme les données du contexte avec `useContext` ;

- Modifie le texte pour qu'il affiche **en ligne** si la valeur booléenne est **true**, et **hors ligne** si la valeur est **false** ;

-Ajoute un écouteur d'événement sur le bouton qui appellera `setIsOnline` et basculera la valeur de `isOnline`.
