import propTypes from "prop-types"
import { Link } from 'react-router-dom'
function Movie({ id, title, summary, image, genres }) {
	return (
		<div key={id}>
			<img alt={image} src={image} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((v, i) => (<li key={i}>{v}</li>))}
			</ul>
		</div>
	);
}

Movie.protoTypes = {
	id: propTypes.number.isRequired,
	image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	genres: propTypes.arrayOf(propTypes.string).isRequired
}
export default Movie;
