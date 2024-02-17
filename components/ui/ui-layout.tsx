"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function UiLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full flex flex-col bg-background">
			<Navbar />
			<Sidebar />
			{/* <div className="container mx-auto flex items-center justify-between px-4 py-1 lg:px-8"> */}
			{children}
			{/* </div> */}
		</div>
	);
}
