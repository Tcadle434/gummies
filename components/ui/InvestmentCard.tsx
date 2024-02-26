import React from "react";
import { Investments } from "@/gql/graphql";

export function InvestmentCard({ name, date, status, imageUrl }: Investments) {
	return (
		<div className="w-full">
			<div
				className={`bg-foreground p-4 rounded-md border-mutedForeground border-2 transform transition-opacity duration-500 ease-in-out hover:border-primary flex flex-col md:grid md:grid-cols-2 md:gap-4`}
			>
				<div className="order-1 md:order-2">
					<img
						src={imageUrl!}
						alt={name}
						className="object-cover rounded-md md:h-44 md:w-44 w-52 h-52 lg:h-56 lg:w-56 mx-auto md:mx-0"
					/>
				</div>
				<div className="flex flex-col justify-between mt-4 md:mt-0 md:order-1 order-2">
					<div className="text-left">
						<div className={`font-blinker text-white font-semibold`}>{name}</div>
						<div className={`font-blinker text-primary mt-2`}>{status}</div>
						<div
							className={`font-blinker text-mutedForeground opacity-75 bottom-0 fixed mb-4 mt-4`}
						>
							{date}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
