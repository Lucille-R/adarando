import './App.css';
import Entete from './components/Entete';
import ListeRandos from './components/ListeRandos';
import randonnees from './randonnees.json';
import BoutonFiltres from './components/BoutonFiltres';
import { useState } from 'react';

const App = () => {

  const [filtreDifficulte, setFiltreDifficulte] = useState(null);

  const randonneesFiltrees = randonnees.filter((randonnee) => {
    return filtreDifficulte === null || filtreDifficulte === randonnee.difficulte;
  });

  return (
    <>
      <Entete nbRandonnees={randonneesFiltrees.length} />
      <BoutonFiltres
        changerFiltre={setFiltreDifficulte}
        filtreActif={filtreDifficulte}
      />
      <ListeRandos tableauRandonnees={randonneesFiltrees} />
    </>
  );
};

export default App;