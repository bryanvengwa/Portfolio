import React from "react";
import Chat from "./Chat";
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
									contact details below or using my chat mock
									app!
								</p>

								<Links />
							</div>
							<br />
							<br />
						</div>
						<div className="col-md-12 col-lg-6">
							<div className="app-containers">
								<Chat />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
