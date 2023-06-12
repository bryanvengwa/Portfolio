import React from "react";
import Chat from "./Chat";
import Links from "./Links";
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";

export default function Contact() {
	return (
		<>
			<section className="contact">
				
				<div className=" container gradient">
					<div className="row ">
						<div className="col-md-6">
							<div className="text-container">
								<div className="headings">
									<h2>
										{" "}
										How can you communicate? <br />
										
									</h2>
								</div>
								<p className="p">
									You can get in touch with me by using my
									contact details below or using my mock chat
									app!
								</p>
								<ul>
									<li>
										{" "}
										<FaPhone /> +(263) 71 832 9922
									</li>
									<li>
										{" "}
										<FaMapMarker />
										Harare Zimbabwe
									</li>
									<li>
										{" "}
										<FaEnvelope /> bmvengwa@gmail.com
									</li>
								</ul>
								<Links />
							</div>
						</div>
						<div className="col-md-6">
							<div className="app-container">
								<Chat />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
