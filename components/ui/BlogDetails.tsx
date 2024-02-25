"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Blog } from "@/gql/graphql";
import MarkdownContent from "./MarkdownContent";

export function BlogDetails({ title, subtitle, publishDate, content }: Blog) {
	// Using useParams to access dynamic route parameters
	const params = useParams();
	const id = params.id;

	console.log(content);

	return (
		<div className="container mx-auto flex flex-col justify-between md:px-20 lg:px-40 w-full mt-10 px-10 mb-10">
			<h1 className="text-4xl font-bold">{title}</h1>
			<h2 className="text-xl text-mutedForeground mt-2">{subtitle}</h2>
			<p className="text-sm text-mutedForeground mt-2">{publishDate}</p>
			{/* grey line separator */}
			<div className="w-20 h-1 bg-primary mt-4 mb-4"></div>
			<MarkdownContent content={content} />
		</div>
	);
}
