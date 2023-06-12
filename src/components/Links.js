import React from 'react'
import { FaFacebookF , FaGithub , FaInstagram , FaLinkedinIn ,FaTwitter} from 'react-icons/fa'
import '../link.scss'

export default function Links() {
  return (
		<>
			<div className="wrapper">
				<div className="button">
					<div className="icon f">
						<FaFacebookF className="facebook i" size="2.1em" />
					</div>
					<span className="fa">Facebook</span>
				</div>
				<div className="button">
					<div className="icon g">
						<FaGithub className="github i" size="2.1em" />
					</div>
					<span className="gi">Github</span>
				</div>
				<div className="button">
					<div className="icon t">
						<FaTwitter className="twitter i" size="2.1em" />
					</div>
					<span className="tw">Twitter</span>
				</div>
				<div className="button">
					<div className="icon inst">
						<FaInstagram className="instagram i" size="2.1em" />
					</div>
					<span className="insta">Instagram</span>
				</div>
				<div className="button">
					<div className="icon li">
						<FaLinkedinIn className="linkedin i" size="2.1em" />
					</div>
					<span className="lin">LinkedIn</span>
				</div>
			</div>
		</>
  );
}
