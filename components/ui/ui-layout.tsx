"use client";

import React from "react";
import { Navbar } from "./Navbar";

export function UiLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full flex flex-col bg-black">
			<Navbar />
			{children}
		</div>
	);
}
