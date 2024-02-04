import { useGetBalance } from "./account-data-access";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

function BalanceSol({ balance }: { balance: number }) {
	return <span>{Math.round((balance / LAMPORTS_PER_SOL) * 100) / 100}</span>;
}

export function AccountBalance({ address }: { address: PublicKey }) {
	const query = useGetBalance({ address });

	return (
		<div className="flex items-center p-2 border border-gray-500 rounded-lg">
			<img src="/solanaLogoMark.png" alt="Icon" className="h-4 w-4 mr-2" />{" "}
			<h1 className="text-sm" onClick={() => query.refetch()}>
				{query.data ? <BalanceSol balance={query.data} /> : "Loading..."} SOL
			</h1>
		</div>
	);
}
