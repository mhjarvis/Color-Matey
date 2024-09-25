/* eslint-disable no-unused-vars */
import "./Faq.css";
import FaqItem from "./FaqItem";

export default function FAQ() {
	const faqs = [
		{
			num: 1,
			title: "How do I use Color-Matey?",
			text: "Simply click button to generate a random color scheme. We have more features in stock and are working on updates, so please come back to check them out in the future.",
		},
		{
			num: 2,
			title: "Is ColorMatey free to use?",
			text: "Absolutely! Color-Matey is completely free to use, with no hidden fees or required sign-ups.",
		},
		{
			num: 3,
			title: "What color theories does Color-Matey use?",
			text: "Color-Matey applies various color theories, including complementary, triadic, and analogous schemes. This ensures that your color combinations are harmonious and visually appealing.",
		},
	];

	return (
		<div className="faq">
			{faqs.map((faq, i) => (
				<FaqItem key={faq.title} title={faq.title} text={faq.text} />
			))}
		</div>
	);
}
