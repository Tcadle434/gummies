"use client";

import { useNotes } from "./notes-data-access";

export function DisplayNotes() {
	const { notesTanstackQuery } = useNotes();

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
