import { render } from "@react-email/render";
import Email from "./Email"

const EmailForm = () => {
	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const { name, email } = Object.fromEntries(formData);

		const html = render(<Email name={name as string} />, {
			pretty: true,
		})

		const text = render(<Email name={name as string} />, {
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
					to: email,
					subject: `Hello, ${name}`,
					html: html,
					text: text,
				})
			})	
			
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form id="contact-form" onSubmit={handleSubmit}>
			<div className="contact-input">
				<label className="form-label">What's your name?</label>
				<input className="form-textfield" id="contact-name" type="text" placeholder="Name" name="name" required />
			</div>

			<div className="contact-input">
				<label className="form-label">Your current email?</label>
				<input className="form-textfield" id="contact-email" type="text" placeholder="Email" name="email" required />
			</div>

			<div className="contact-input">
				<label className="form-label">Tell me your thoughts!</label>
				<textarea className="form-textarea" id="contact-message" required></textarea>
			</div>

			<button className="button form-submit" id="contact-submit">Submit</button>
		</form>
	)
}

export default EmailForm