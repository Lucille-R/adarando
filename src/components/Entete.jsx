import './Entete.css';

const Entete = (props) => {
	return (
		<div className="entete">
			<h1>AdaRando</h1>
			<p>Le guide de vos randos !</p>
			<span className="nb-randos">Randonnées trouvées : {props.nbRandonnees}</span>
		</div>
	);
};

export default Entete;