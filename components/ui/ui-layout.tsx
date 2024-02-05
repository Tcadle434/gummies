"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function UiLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full flex flex-col bg-background">
			<Navbar />
			<Sidebar />
			{children}
		</div>
	);
}
