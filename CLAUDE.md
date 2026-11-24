# CLAUDE.md

Ce fichier fournit des indications à Claude Code (claude.ai/code) pour travailler sur le code de ce dépôt.

## README

Pour plus d'informations sur le projet : @README.md

## Contexte du projet

Je débute en JavaScript : les explications doivent donc être détaillées et en français, et le code doit rester simple et explicite.

## Commandes

- `npm run build` : build de production dans `dist/`
- `npm run preview` : servir le build de production
- `npm run lint` : lancer oxlint (configuration dans `.oxlintrc.json` : `react/rules-of-hooks` est une erreur, `react/only-export-components` un avertissement)

Aucun framework de test n'est configuré.

## Architecture

`App` est le seul composant qui manipule les données. Il importe directement `src/randonnees.json` et les transmet vers le bas uniquement par les props.

Organisation des fichiers :
- Un composant par fichier dans `src/components/`, avec `export default`.
- Le style est en CSS simple. `src/index.css` contient les styles globaux (issus en grande partie du modèle Vite, y compris les variables du mode sombre). `src/App.css` contient le fond de la page et la mise en page flex de `.liste-rando`. Un composant peut importer son propre fichier CSS (par ex. `Entete.css`).
- Les ressources statiques sont dans `public/` et référencées depuis la racine (par ex. `url('/images/montagne.jpg')`).

## Conventions de code

Garder le style existant du projet :
- Composants en fonctions fléchées, toujours avec accolades et `return` explicite (pas de fléchées courtes).
- Noms en français (variables, props, composants, classes CSS), comme dans le code existant.
- `const` par défaut, `let` uniquement si la valeur doit changer, jamais `var`.
- Points-virgules partout.
- `===` et `!==` pour toutes les comparaisons.
- `props.x` plutôt que la déstructuration.

## Règles de travail

- Avant toute modification, m'expliquer ce qui va être fait et pourquoi.
- Faire des modifications petites et ciblées, une à la fois.
- Après chaque modification, m'expliquer en détail et en français le code ajouté ou modifié.
- Lancer `npm run lint` après chaque modification de code.
- Ne jamais faire de `git commit`, `git push` ni de changement de branche sans mon accord.
- Ne jamais installer de dépendance sans mon accord.
- Messages de commit en Conventional Commits, en français (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`).