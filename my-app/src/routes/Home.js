import React from 'react'
import { useEffect, useState } from "react";
import Movie from "../component/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const src = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
		const res = await fetch(src);
		const json = await res.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	const movieMap = () => (
		<div>
			{movies.map((value, index) => (
				<Movie
					key={index}
					id={value.id}
					title={value.title}
					summary={value.summary}
					image={value.medium_cover_image}
					genres={value.genres} />
			))}
		</div>
	);

	return (
		<div>
			<h1>The Movie! {movies.length}</h1>
			{loading
				? <strong>Loading...</strong>
				: movieMap()
			}
		</div>
	);
}
export default Home;
