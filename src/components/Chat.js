// Chat.js
import React, { useState } from "react";
// import d "./Chat.css";

const Chat = () => {
	const names =['name','email', 'message']
	const defaultMessages = [
		"What is your full name?",
		"Type in your email?",
		"Briefly describe how I can contribute to yout project.",
		"Thank you for reaching out !!!",
	];
	const [currentName , setCurrrentName] =useState("name")
	const [messages, setMessages] = useState([]);
	const [currentMessage, setCurrentMessage] = useState("");
	const [step, setStep] = useState(0);
	const [isInputDisabled, setIsInputDisabled] = useState(false);
		let nameCounter =0
	const handleMessageChange = (e) => {
		setCurrentMessage(e.target.value);
		// ////// updating the name fo the form 
		nameCounter = nameCounter + 1;
		setCurrrentName(names[nameCounter])
	};

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (currentMessage.trim() !== "") {
			setMessages([...messages, currentMessage]);
			setCurrentMessage("");
			if (step < defaultMessages.length - 1) {
				setStep(step + 1);
			} else {
				setIsInputDisabled(true); // Disable input after the final message
			}
		}
	};

	return (
		<div className="chat-container">
			<div className="chat-messages">
				{messages.map((message, index) => (
					<div className="message" key={index}>
						<p>{message}</p>
					</div>
				))}
				{step < defaultMessages.length && (
					<div className="message">{defaultMessages[step]}</div>
				)}
			</div>
			<div className="chat-input">
				<form onSubmit={handleSendMessage}>
					<input
						type="text"
						name={currentName}
						id=""
						placeholder="Type your response here"
						value={currentMessage}
						onChange={handleMessageChange}
						disabled={isInputDisabled}
					/>
					<button type="submit" disabled={isInputDisabled}>
						Send
					</button>{" "}
					{/* Disable button when isInputDisabled is true */}
				</form>
			</div>
		</div>
	);
};

export default Chat;
