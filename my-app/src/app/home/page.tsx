import React from "react"

async function getRepo() {
	const src = "http://localhost:3000/api/gitcommit";
	const res = await fetch(src);
	if (!res.ok)
		throw new Error('Failed to fetch data');
	const repo: GitCommit[] = await res.json();
	return repo;
}

export default async function Home() {
	const repo: GitCommit[] = await getRepo();
	return (
		<div>
			<p>Home</p>
			<div>
				{!repo && <div>Loading</div>}
				{repo?.map((v: any
					, i: number) => (<li key={i}>{v.author.login}</li>))}
			</div>
		</div>
	)
}

interface GitCommit {
	sha: string,
	node_id: string,
	commit: {
		author: {
			name: string,
			email: string,
			date: Date,
		},
		committer: {
			name: string,
			email: string,
			date: Date,
		},
		message: string,
		tree: {
			sha: string,
			url: string
		},
		url: string,
		comment_count: number,
		verification: {
			verified: boolean,
			reason: string,
			signature: any,
			payload: any
		}
	},
	url: string,
	html_url: string,
	comments_url: string,
	author: {
		login: string,
		id: number,
		node_id: string,
		avatar_url: string,
		gravatar_id: string,
		url: string,
		html_url: string,
		followers_url: string,
		following_url: string,
		gists_url: string,
		starred_url: string,
		subscriptions_url: string,
		organizations_url: string,
		repos_url: string,
		events_url: string,
		received_events_url: string,
		type: string,
		site_admin: boolean
	},
	committer: {
		login: string,
		id: number,
		node_id: string,
		avatar_url: string,
		gravatar_id: string,
		url: string,
		html_url: string,
		followers_url: string,
		following_url: string,
		gists_url: string,
		starred_url: string,
		subscriptions_url: string,
		organizations_url: string,
		repos_url: string,
		events_url: string,
		received_events_url: string,
		type: string,
		site_admin: boolean
	},
	parents: [
		{
			sha: string,
			url: string,
			html_url: string
		}
	]
}
