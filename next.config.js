const nextConfig = {
	webpack: (config, { isServer }) => {
		// Add graphql-tag/loader to handle .graphql and .gql files
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "graphql-tag/loader",
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
