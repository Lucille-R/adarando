# 🥾 AdaRando

Une application React affichant une liste de randonnées.

🌐 **Site en ligne** : https://lucille-r.github.io/adarando/

## 🤖 Améliorations avec Claude Code

![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?logo=claude&logoColor=white)

**Projet d'origine** : un kata React d'Ada Tech School, que j'ai codé seule.

**Mode Plan, code écrit par Claude Code**
- ajout du `CLAUDE.md` (contexte, conventions de code, règles de travail) ;
- nettoyage : langue de la page (`lang="fr"`), titre de l'onglet, favicon, nom du projet, CSS inutilisé.
- affichage de la région sur les cartes ;
- style des étiquettes selon la difficulté, fond clair et centrage des cartes.

**Mode Plan et style de réponse `Learning`, code écrit par moi**
- bonus filtre par difficulté (`useState`), avec Claude Code comme tuteur : indices, sans solution.

**Mon rôle** : choix des améliorations, rédaction du `CLAUDE.md`, validation de chaque plan, relecture de chaque modification et de chaque commande avant de l'accepter.

## 📝 Description
*Kata réalisé dans le cadre de la formation Concepteur Développeur d'Applications à Ada Tech School.*

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
- [x] Affichage de la région de chaque randonnée *(avec Claude Code en Mode Plan)*
- [x] Composant `EtiquetteDifficulte` (affiche la difficulté)  
- [x] BONUS : Compteur du nombre de randonnées affichées dans l'en-tête
- [x] BONUS : Un style différent selon la difficulté *(avec Claude Code en Mode Plan)*
- [x] BONUS : Un useState avec des boutons pour filtrer par difficulté *(codé seule, Claude Code en tuteur - Mode Plan + style de réponses 'Learning')*

## 🛠️ Technologies utilisées

- **React** (via Vite)
- **JavaScript**
- **CSS3**

## 📂 Structure du projet

```
adarando/
├── .github/
│   └── workflows/
│       └── deploy.yml
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
├── vite.config.js
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

Ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173/adarando/`) pour voir la liste des 12 randonnées, avec leur nom, leur région, leur difficulté, leur durée, leur dénivelé, et la mention "Balisée" quand elle s'applique.

Les boutons sous l'en-tête permettent de n'afficher que les randonnées faciles, moyennes ou difficiles. Le bouton « Aucun filtre » les réaffiche toutes. Le compteur de l'en-tête indique le nombre de randonnées affichées.

## 🌳 Workflow Git

Ce projet suit une organisation en branches inspirée de Git Flow :

- `main` : version stable du projet
- `dev` : branche d'intégration des fonctionnalités
- `feature/nom-de-la-feature` : une branche par fonctionnalité développée

## 👤 Auteure

**Lucille Richard** · [LinkedIn](https://www.linkedin.com/in/lucille-richard) · Étudiante chez Ada Tech School

## 🎓 Contexte

Projet réalisé dans un cadre pédagogique · Ada Tech School
