import './BoutonFiltres.css';

const BoutonFiltres = (props) => {
	return (
		<div className="boutons">
			<button onClick={() => {
				props.changerFiltre(null);
			}}>Aucun filtre</button>

			<button onClick={() => {
				props.changerFiltre("facile");
			}}>Facile</button>

			<button onClick={() => {
				props.changerFiltre("moyen");
			}}>Moyen</button>

			<button onClick={() => {
				props.changerFiltre("difficile");
			}}>Difficile</button>
		</div>
	);
};

export default BoutonFiltres;