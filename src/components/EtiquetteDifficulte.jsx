import './EtiquetteDifficulte.css';

const EtiquetteDifficulte = (props) => {
	return (
		<span className={`difficulte difficulte-${props.difficulte}`}>{props.difficulte}</span>
	);
};

export default EtiquetteDifficulte;