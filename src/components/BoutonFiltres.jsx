import './BoutonFiltres.css';

const BoutonFiltres = (props) => {
	return (
		<div className="boutons">
			<button
				className={props.filtreActif === null ? "actif" : null}
				onClick={() => {
					props.changerFiltre(null);
				}}
			>Aucun filtre</button>

			<button
				className={props.filtreActif === "facile" ? "actif" : null}
				onClick={() => {
					props.changerFiltre("facile");
				}}
			>Facile</button>

			<button
				className={props.filtreActif === "moyen" ? "actif" : null}
				onClick={() => {
					props.changerFiltre("moyen");
				}}
			>Moyen</button>

			<button
				className={props.filtreActif === "difficile" ? "actif" : null}
				onClick={() => {
					props.changerFiltre("difficile");
				}}
			>Difficile</button>
		</div>
	);
};

export default BoutonFiltres;