import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownComponentProps {
	children?: ReactNode;
}

const renderers = {
	h1: ({ children }: MarkdownComponentProps) => (
		<h1 className="text-3xl font-bold my-4">{children}</h1>
	),
	h2: ({ children }: MarkdownComponentProps) => (
		<h2 className="text-2xl font-bold my-3">{children}</h2>
	),
	h3: ({ children }: MarkdownComponentProps) => (
		<h3 className="text-xl font-semibold my-2">{children}</h3>
	),
};

const MarkdownContent = ({ content }: { content: any }) => {
	return (
		<ReactMarkdown
			components={renderers}
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw, rehypeSanitize]}
		>
			{content}
		</ReactMarkdown>
	);
};

export default MarkdownContent;
