import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Page() {
	return (
		<section className="page">
                    <Navbar/>
			<Banner />
		</section>
	);
}
