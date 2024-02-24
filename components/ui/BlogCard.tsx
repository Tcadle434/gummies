import React from "react";
import { Blog } from "@/gql/graphql";

export function BlogCard({ title, subtitle, publishDate, content }: Blog) {
	return (
		<div className="hover:scale-105 transform duration-500">
			<div
				className={`bg-foreground p-4 rounded-md border-border border-2 transform cursor-pointer transition-opacity duration-500 ease-in-out`}
			>
				<div className={`text-center mt-2 font-mono text-white opacity-50`}>{title}</div>
				<div className={`text-center mt-2 font-mono text-mutedForeground opacity-50`}>
					{subtitle}
				</div>
				<div className={`text-center mt-2 font-mono text-mutedForeground opacity-50`}>
					{publishDate}
				</div>
			</div>
		</div>
	);
}
