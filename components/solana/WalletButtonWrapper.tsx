import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletButtonWrapper = (props: any) => {
	return (
		<WalletMultiButton
			style={{
				backgroundColor: "#7B2937",
				color: "#FFFFFF",
				borderRadius: "4px",
				padding: "8px 16px",
				cursor: "pointer",
				outline: "none",
				fontSize: "16px",
				textAlign: "center",
				textDecoration: "none",
			}}
			{...props}
		/>
	);
};

export default WalletButtonWrapper;
