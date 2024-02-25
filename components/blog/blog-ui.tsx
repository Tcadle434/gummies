"use client";

import { useHolders, useBlogs } from "./holders-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { marketplaces } from "../gallery/gallery-ui";
import { BlogCard } from "../ui/BlogCard";
import { BlogDetails } from "../ui/BlogDetails";
import { Blog } from "@/gql/graphql";
import Loader from "../ui/Loader";

export function DisplayBlogCard() {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();
	const { blogsTanstackQuery } = useBlogs();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center font-mono px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				Articles are only available to Gummies holders. Please connect your wallet!
			</div>
		);
	}

	if (holdersQuery.isLoading || blogsTanstackQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (holdersQuery.isError || blogsTanstackQuery.isError) {
		return (
			<div className="h-screen flex items-center justify-center font-mono px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				There was an error fetching the data. Please try again later.
			</div>
		);
	}

	return (
		<div className="font-mono mt-20">
			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-20">
					{/* map through blogsTanstackQuery.data.blogCollection.edges and for each inner node object make a blog card in a grid object */}
					{blogsTanstackQuery.data?.blogCollection!.edges.map(
						({ node }: { node: Blog }, index: number) => (
							<BlogCard
								key={index}
								id={node.id}
								title={node.title}
								subtitle={node.subtitle ?? ""} // Use '??' to provide a fallback for potentially null/undefined values
								publishDate={node.publishDate ?? ""} // Handle potentially null/undefined publishDate
								content={node.content ?? ""}
								cardImage={node.cardImage ?? ""}
							/>
						)
					)}
				</div>
			) : (
				<div className="h-screen flex items-center justify-center text-center flex-col">
					<h1>
						You don't own a Gummy :(.
						<br />
						Look out for the next auction or make an offer
					</h1>
					<div className="flex flex-row mx-2">
						{marketplaces.map((marketplace, index) => (
							<div key={index}>
								<a
									href={marketplace.url}
									className="block p-1 rounded-full border-2 border-transparent hover:border-white transition-all duration-500"
								>
									<img
										src={marketplace.src}
										alt={marketplace.alt}
										className="rounded-full transition-opacity w-10 hover:opacity-75"
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export function DisplayBlogDetails({}) {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();
	const { blogsTanstackQuery } = useBlogs();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center font-mono px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				Articles are only available to Gummies holders. Please connect your wallet!
			</div>
		);
	}

	if (holdersQuery.isLoading || blogsTanstackQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (holdersQuery.isError || blogsTanstackQuery.isError) {
		return (
			<div className="h-screen flex items-center justify-center font-mono px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				There was an error fetching the data. Please try again later.
			</div>
		);
	}
	return (
		<div className="font-mono md:ml-14 mt-20 ml-4">
			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div className="">
					{/* map through blogsTanstackQuery.data.blogCollection.edges and for each inner node object make a blog card in a grid object */}
					{blogsTanstackQuery.data?.blogCollection!.edges.map(
						({ node }: { node: Blog }, index: number) => (
							<BlogDetails
								key={index}
								id={node.id}
								title={node.title}
								subtitle={node.subtitle ?? ""} // Use '??' to provide a fallback for potentially null/undefined values
								publishDate={node.publishDate ?? ""} // Handle potentially null/undefined publishDate
								content={node.content ?? ""}
							/>
						)
					)}
				</div>
			) : (
				<div className="h-screen flex items-center justify-center text-center flex-col">
					<h1>
						You don't own a Gummy :(.
						<br />
						Look out for the next auction or make an offer
					</h1>
					<div className="flex flex-row mx-2">
						{marketplaces.map((marketplace, index) => (
							<div key={index}>
								<a
									href={marketplace.url}
									className="block p-1 rounded-full border-2 border-transparent hover:border-white transition-all duration-500"
								>
									<img
										src={marketplace.src}
										alt={marketplace.alt}
										className="rounded-full transition-opacity w-10 hover:opacity-75"
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
