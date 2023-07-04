import React from "react";
import Links from "./Links";

export default function Contact(props) {
	return (
		<>
			<section className="contact">
				<div className=" container gradient">
					<div className="row ">
						<div className="col-md-12 col-lg-6">
							<div className="text-container">
								<div className="headings">
									<h2>
										{" "}
										<span
											className={
												props.color === 1 ? "one" : ""
											}
										>
											How
										</span>
										<span
											className={
												props.color === 2 ? "two" : ""
											}
										>
											{" "}
											can
										</span>
										<span
											className={
												props.color === 2 ? "two" : ""
											}
										>
											{" "}
											you{" "}
										</span>
										<span
											className={
												props.color === 3 ? "three" : ""
											}
										>
											communicate?
										</span>{" "}
										<br />
									</h2>
								</div>
								<p className="p">
									You can get in touch with me by using my
									contact details below or you can email me
									directly to my mailbox!
								</p>

								<Links />
							</div>
							<br />
							<br />
						</div>
						<div className="col-md-12 col-lg-6">
							{/* <div className="app-containers">
								<Chat />
							</div> */}
							<form
								action="https://formsubmit.co/bmvengwa@gmail.com"
								method="POST"
							>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									required
								/>
								<div className="flex-container">
									<input
										className="input"
										type="text"
										name="email"
										placeholder="Your Email"
										required
									/>
									<input
										className="input"
										type="text"
										name="subject"
										placeholder="Subject"
										required
									/>
								</div>
								<textarea
									className="input"
									placeholder="Write Your Message here....."
									name="message"
									id=""
									cols="30"
									rows="10"
									required
								></textarea>
								<button type="submit">Send</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
