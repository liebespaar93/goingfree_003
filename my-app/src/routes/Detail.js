import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * @param id : 영화 아이디
 * @returns
 */
function Detail() {
	const param = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const getMovie = async () => {
		const src = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
		const res = await fetch(src);
		const json = await res.json();
		json.data.movies.forEach(element => {
			if (element.id === Number(param.id))
				return setMovie(element);
		});
		setLoading(false);
	}
	const movieMap = () => (
		<div>
			<div>{movie.id}</div>
			<div>{movie.url}</div>
			<div>{movie.imdb_code}</div>
			<div>{movie.title}</div>
			<div>{movie.date_uploaded}</div>
			<div>{movie.summary}</div>
			<div>{movie.year}</div>
			<img alt={movie.medium_cover_image} src={movie.medium_cover_image} />
		</div>
	)
	useEffect(() => {
		getMovie();
		movieMap();
	}, []);
	return (
		<div>
			<Link to={'/'}><button>go back</button></Link>
			{loading
				? <strong>Loading...</strong>
				: movieMap()}
		</div>
	)
}

export default Detail;
