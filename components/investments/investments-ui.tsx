"use client";

import { useInvestments } from "./investments-data-access";

export function DisplayInvestments() {
	const { notesTanstackQuery } = useInvestments();

	if (notesTanstackQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (notesTanstackQuery.isError) {
		return <div>Error</div>;
	}

	return (
		<div>
			<h1>Notes</h1>
			<pre>{JSON.stringify(notesTanstackQuery.data, null, 2)}</pre>
		</div>
	);
}
