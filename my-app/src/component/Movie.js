import propTypes from "prop-types"

function Movie({id, title, summary, image, genres}) {
	return (
		<div key={id}>
			<img alt={image} src={image} />
			<h2>{title}</h2>
			<p>{summary}</p>
			<ul>
				{genres.map(
					(v, i) => {
						return <li key={i}>{v}</li>;
					})
				}
			</ul>
		</div>
	);
}

Movie.protoTypes = {
	image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	genres: propTypes.arrayOf(propTypes.string).isRequired
}
export default Movie;
