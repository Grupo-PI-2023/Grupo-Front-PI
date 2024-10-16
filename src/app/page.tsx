"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarAuthenticated from "@/components/NavbarAuthenticated";

export default function Home() {
	const [authenticated, setAuthenticated] = useState(true);
	return (
		<div className="flex h-screen flex-col justify-items-center ">
			{authenticated ? <NavbarAuthenticated /> : <Navbar />}
			<div className="flex h-full items-center justify-center">
				<h1>Home Page</h1>
			</div>
			<Footer />
		</div>
	);
}
