"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Blog } from "@/gql/graphql";
import MarkdownContent from "./MarkdownContent";

export function BlogDetails({ title, subtitle, publishDate, content }: Blog) {
	// Using useParams to access dynamic route parameters
	const params = useParams();
	const id = params.id;

	return (
		<div>
			<MarkdownContent content={content} />
		</div>
	);
}
