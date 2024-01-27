import { render } from "@react-email/render";
import Email from "./Email"

const EmailSubmit = () => {
	const handleSubmit = async() => {
		const contact_name = document.getElementById("contact-name") as HTMLInputElement;
		const contact_email = document.getElementById("contact-email") as HTMLInputElement;
		const contact_message = document.getElementById("contact-message") as HTMLInputElement;

		const html = render(<Email name={contact_name.value as string} input={contact_message.value as string} />, {
			pretty: true,
		})

		const text = render(<Email name={contact_name.value as string} input={contact_message.value as string} />, {
			plainText: true,
		})

		try {
			const response = await fetch("/api/email.json", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},

				body: JSON.stringify({
					from: 'nathan@ncp.dev',
					to: [contact_email.value, 'nathan@ncp.dev'],
					subject: `I'll be in touch, ${contact_name.value}!`,
					html: html,
					text: text,
				})
			})	
			
			const data = await response.json();
			console.log(
				'%cYour email has been sent (200 - Resend): ',
				`background: #03a80c; color: #fff; padding: 4px; border-radius: 2px;`,
				data
			);

			contact_name.value = "";
			contact_email.value = "";
			contact_message.value = "";
		} catch (error) {
			console.error(
				'%cInternal Server Error (500 - Resend):',
				`background: #c22408; color: #fff; padding: 4px; border-radius: 2px;`,
				error
			);			
		}
	};

	return (
		<button onClick={handleSubmit} className="button form-submit" id="contact-submit">Submit</button>
	)
}

export default EmailSubmit