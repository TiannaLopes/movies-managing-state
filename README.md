API Info 
Endpoints
/film/{query}
{query} string - film ID (or search text but this will take longer)

> Searching for a film here without the ID will take longer as the API will use /search/ for you to find the film’s id then /film/ to fetch the film data.

/search/tt1375666

returns:
{
	id: "tt1375666",
	title: "Inception",
	year: "2010",
	length: "2h 28min",
	rating: "8.8",
	rating_votes: "1909950",
	poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg",
	plot: "A thief who steals corporate secrets...",
	trailer: {
		id: "vi4219471385",
		link: "https://www.imdb.com/videoplayer/vi4219471385"
	},
	cast: [
		{
			actor: "Leonardo DiCaprio",
			actor_id: "nm0000138",
			character: "Cobb"
		},
		[...]
	],
	technical_specs: [
		["Runtime", "2 hr 28 min (148 min)"],
		["Sound Mix", "Dolby Digital | DTS | SDDS"],
		[...]
	]
}
/search/{query}
{query} string - Search text of film, person or company

Returns live results straight from IMDB’s search

> You cannot use a film’s id to search - use /film/ instead

/search/inception

returns:
{
	titles: [
		{
			id: "tt1375666",
			title: "Inception",
			image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg",
		},
		[...]
	],
	names: [],
	companies: []
}