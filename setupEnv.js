const fs = require("fs");

// Read the input from a file
fs.readFile("input-env.txt", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
		return;
	}

	// Split the input into lines
	const lines = data.split("\n");

	// Process each line to create .env format
	const envVariables = lines
		.map((line) => {
			// Split each line by ': ' to separate the key and value
			const [key, value] = line.split(": ").map((part) => part.trim());
			// Replace spaces with underscores and make uppercase for the key
			const envKey = key.replace(/\s+/g, "_").toUpperCase();
			return `${envKey}=${value}`;
		})
		.join("\n");

	// Output the result
	console.log(envVariables);

	// Optionally, write the result to a .env file
	fs.writeFile(".env", envVariables, (err) => {
		if (err) {
			console.error("Error writing to .env file:", err);
			return;
		}
		console.log("Successfully written to .env file");
	});
});
