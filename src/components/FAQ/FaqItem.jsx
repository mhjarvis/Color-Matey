/* eslint-disable react/prop-types */
import "./FaqItem.css";

import { useState } from "react";

export default function FaqItem({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggle() {
		setIsOpen((last) => !last);
	}

	return (
		// need to add open class
		<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
			<div className="title__container">
				<p className="title">{title}</p>
				<p className="icon">{isOpen ? "-" : "+"}</p>
			</div>
			{isOpen && <div className="content-box">{text}</div>}
		</div>
	);
}
