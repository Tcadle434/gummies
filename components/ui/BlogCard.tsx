import React from "react";
import { Blog } from "@/gql/graphql";
import { useRouter } from "next/navigation";

export function BlogCard({ title, id, subtitle, publishDate, content, cardImage }: Blog) {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/blog/${id}`);
	};

	return (
		<button className="hover:scale-105 transform duration-500 w-full" onClick={handleClick}>
			<div
				className={`bg-foreground p-4 rounded-md border-mutedForeground border-2 transform cursor-pointer transition-opacity duration-500 ease-in-out hover:border-primary flex flex-col md:grid md:grid-cols-2 md:gap-4`}
			>
				<div className="order-1 md:order-2">
					<img
						src={cardImage!}
						alt={title}
						className="object-cover rounded-md md:h-44 md:w-44 w-52 h-52 lg:h-56 lg:w-56 mx-auto md:mx-0"
					/>
				</div>
				<div className="flex flex-col justify-between mt-4 md:mt-0 md:order-1 order-2">
					<div className="text-left">
						<div className={`font-blinker text-white font-semibold`}>{title}</div>
						<div className={`font-blinker text-primary mt-2`}>{subtitle}</div>
						<div
							className={`font-blinker text-mutedForeground opacity-75 md:bottom-0 md:fixed mb-4 mt-4`}
						>
							{publishDate}
						</div>
					</div>
				</div>
			</div>
		</button>
	);
}
