# 🥾 AdaRando

Une application React affichant une liste de randonnées..

## 📝 Description

AdaRando est une page React qui affiche 12 randonnées à partir d'un fichier de données fourni (`randonnees.json`). Le projet est volontairement simple : uniquement du front, aucune API, aucune donnée à aller chercher. L'objectif est de retravailler les réflexes de base de React :

- Création d'un projet React de zéro avec Vite
- Découpage en composants
- Passage de données via les props
- Affichage d'une liste avec `.map()`
- Affichage conditionnel

> ℹ️ Les données de `randonnees.json` sont fictives : elles sont fournies pour les besoins du kata.

## ✨ Fonctionnalités à mettre en place

- [x] Composant `Entete` (titre + phrase de présentation)
- [x] Composant `CarteRando` (nom, région, difficulté, durée, dénivelé d'une randonnée)
- [x] Composant `ListeRandos` (affiche une `CarteRando` par randonnée)
- [x] Affichage des 12 randonnées
- [x] Mention "Balisée" affichée uniquement si la randonnée est balisée
- [x] Affichage de la région de chaque randonnée
- [x] Composant `EtiquetteDifficulte` (affiche la difficulté)  
- [x] BONUS : Compteur « 12 randonnées » dans l'en-tête
- [x] BONUS : Un style différent selon la difficulté
- [x] BONUS : Un useState avec des boutons pour filtrer par difficulté

## 🛠️ Technologies utilisées

- **React** (via Vite)
- **JavaScript**
- **CSS3**

## 📂 Structure du projet

```
adarando/
├── public/
│   ├── images/
│   │   └── montagne.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BoutonFiltres.jsx
│   │   ├── BoutonFiltres.css
│   │   ├── Entete.jsx
│   │   ├── Entete.css
│   │   ├── ListeRandos.jsx
│   │   ├── CarteRando.jsx
│   │   ├── CarteRando.css
│   │   ├── EtiquetteDifficulte.jsx
│   │   └── EtiquetteDifficulte.css
│   ├── randonnees.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── CLAUDE.md
├── index.html
├── package.json
├── notes.md
└── README.md
```

## 🌲 Hiérarchie des composants

```
App
├── Entete
├── BoutonFiltres
└── ListeRandos
    └── CarteRando
        └── EtiquetteDifficulte
```

`App` garde en mémoire la difficulté choisie (un `useState` qui vaut `null` quand aucun filtre n'est actif) et calcule le tableau des randonnées filtrées.

`BoutonFiltres` reçoit deux props : `changerFiltre`, la fonction appelée au clic pour changer la difficulté choisie, et `filtreActif`, la difficulté choisie, pour mettre en évidence le bouton actif.

`ListeRandos` reçoit le tableau des randonnées filtrées et affiche une `CarteRando` par randonnée. Chaque `CarteRando` reçoit une seule randonnée et affiche sa propre `EtiquetteDifficulte`.

## 🚀 Installation

1. Cloner le repository :
   ```bash
   git clone https://github.com/Lucille-R/adarando.git
   ```
2. Se rendre dans le dossier du projet :
   ```bash
   cd adarando
   ```
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## 💻 Utilisation

Ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`) pour voir la liste des 12 randonnées, avec leur nom, leur région, leur difficulté, leur durée, leur dénivelé, et la mention "Balisée" quand elle s'applique.

Les boutons sous l'en-tête permettent de n'afficher que les randonnées faciles, moyennes ou difficiles. Le bouton « Aucun filtre » les réaffiche toutes. Le compteur de l'en-tête indique le nombre de randonnées affichées.

## 🌳 Workflow Git

Ce projet suit une organisation en branches inspirée de Git Flow :

- `main` : version stable du projet
- `dev` : branche d'intégration des fonctionnalités
- `feature/nom-de-la-feature` : une branche par fonctionnalité développée

## 👤 Auteur

- **Lucille** — Étudiante chez Ada Tech School

## 📄 Licence

Projet réalisé dans un cadre pédagogique — Ada Tech School.
