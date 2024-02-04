import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "./graphql/schema/schema.graphql",
	documents: "./graphql/queries/**/*.graphql",
	generates: {
		"./gql/": {
			preset: "client",
			plugins: [],
		},
		"./graphql.schema.json": {
			plugins: ["introspection"],
		},
	},
};

export default config;
