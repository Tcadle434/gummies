import React from "react";
import { Blog } from "@/gql/graphql";
import { useRouter } from "next/navigation";

export function BlogCard({ title, id, subtitle, publishDate, content, cardImage }: Blog) {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/blog/${id}`);
	};
	return (
		<button className="hover:scale-105 transform duration-500" onClick={handleClick}>
			<div
				className={`bg-foreground p-4 rounded-md border-mutedForeground border-2 transform cursor-pointer transition-opacity duration-500 ease-in-out hover:border-primary`}
			>
				<div className={`text-left mt-2 font-mono text-white opacity-50`}>{title}</div>
				<div className={`text-left mt-2 font-mono text-mutedForeground opacity-50`}>
					{subtitle}
				</div>
				<div className={`text-left mt-2 font-mono text-mutedForeground opacity-50`}>
					{publishDate}
				</div>
				<img
					src={cardImage!}
					alt={title}
					className="h-32 w-full object-cover rounded-md mt-2"
				/>
			</div>
		</button>
	);
}
