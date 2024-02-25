"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function UiLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full flex flex-col bg-background">
			<Navbar />
			<Sidebar />
			{children}
			<Footer />
		</div>
	);
}
