import { GeistSans } from "geist/font/sans";
import { Provider } from "./provider";
import { ClusterProvider } from "@/components/cluster/cluster-data-access";
import { SolanaProvider } from "@/components/solana/solana-provider";
import { UiLayout } from "@/components/ui/ui-layout";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Gummies NFT Collection on Solana",
	description: "Gummies. 1/1 private members collective",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body className="text-white bg-background">
				<Provider>
					<ClusterProvider>
						<SolanaProvider>
							<UiLayout>
								<main className="min-h-screen flex flex-col items-center">
									{children}
								</main>
							</UiLayout>
						</SolanaProvider>
					</ClusterProvider>
				</Provider>
			</body>
		</html>
	);
}
