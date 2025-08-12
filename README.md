# Documentation de démarrage - SportSee Front

Cette documentation explique comment configurer et démarrer le projet SportSee.

## Prérequis

- Node.js (version recommandée: 18.x ou supérieure)
- npm (inclus avec Node.js)

## Installation

Clonez le dépôt et installez les dépendances:

```bash
git clone https://github.com/getsu7/sportsee-front.git
cd sportsee-front
npm install
```

## Démarrage en mode développement

Pour lancer l'application en mode développement avec des données simulées:

```bash
npm run dev
```

Cela démarrera l'application avec Vite en utilisant des données fictives (VITE_USE_MOCK_DATA=true).
L'application sera accessible à l'adresse: http://localhost:5173

## Démarrage en mode production

Il est nécessaire d'avoir lancer au préalable le backend de SportSee

Pour lancer l'application avec des données réelles:

```bash
npm run prod
```

Cela démarrera l'application avec les données de l'API réelle (VITE_USE_MOCK_DATA=false).