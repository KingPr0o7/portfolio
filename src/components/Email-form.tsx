import { render } from "@react-email/render";
import Email from "./Email"

const EmailForm = () => {
	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const { name, email, input } = Object.fromEntries(formData);
		const contact_name = document.getElementById("contact-name") as HTMLInputElement;
		const contact_email = document.getElementById("contact-email") as HTMLInputElement;
		const contact_message = document.getElementById("contact-message") as HTMLInputElement;
		const contact_popup = document.getElementById("contact-popup") as HTMLDialogElement;

		const html = render(<Email name={name as string} input={input as string} />, {
			pretty: true,
		})

		const text = render(<Email name={name as string} input={input as string} />, {
			plainText: true,
		})

		try {
			const response = await fetch("/api/email.json", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},

				body: JSON.stringify({
					from: 'confirmation@ncp.dev',
					to: [email, 'confirmation@ncp.dev'],
					subject: `I'll be in touch, ${name}!`,
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
			contact_popup.showModal();
		} catch (error) {
			console.error(
				'%cInternal Server Error (500 - Resend):',
				`background: #c22408; color: #fff; padding: 4px; border-radius: 2px;`,
				error
			);	

			document.getElementById("contact-popup-title").innerHTML = "Internal Server Error (500)";
			document.getElementById("contact-popup-description").innerHTML = "The E-mail Service Provider, Resend, has failed (500) to send your email. You can write to me at: <b>nathan@ncp.dev</b>.";
			contact_popup.showModal();
		}
	};

	const handleName = (e: React.FormEvent<HTMLInputElement>) => {
		let regex = /^[a-zA-Z- ]+$/;
		let input = e.currentTarget;
		if (regex.test(input.value)) {
			input.setCustomValidity('');
		} else {
			input.setCustomValidity('Name cannot have special characters, numbers, or be empty.');
		}
		input.reportValidity();		
	}

	const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
		let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let domainEmail = /^nathan(\+[a-zA-Z0-9]+)?@ncp\.dev$/;
		let legalEmail = /^legal(\+[a-zA-Z0-9]+)?@ncp\.dev$/
		let input = e.currentTarget;
		if (regex.test(input.value)) {
			input.setCustomValidity('');
		} else {
			input.setCustomValidity('Please enter a valid email address (username@domain.TLD).');
		}

		if (location.hostname !== "localhost") {
			if (domainEmail.test(input.value)) {
				input.setCustomValidity('Don\'t use my email address, silly!');
			}
			if (legalEmail.test(input.value)) {
				input.setCustomValidity('Don\'t use my legal email address. If you need legal help, send it through your email client.');
			}
		}
		
		input.reportValidity();		
	}

	return (
		<form id="contact-form" onSubmit={handleSubmit}>
			<div className="contact-input">
				<label className="form-label" htmlFor="contact-name">What's your name? <span className="form-star">*</span></label>
				<input className="form-textfield" onInput={handleName} id="contact-name" type="text" placeholder='Officer K, "Joe"' name="name" required autoComplete="name" />
			</div>

			<div className="contact-input">
				<label className="form-label" htmlFor="contact-email">Your current email? <span className="form-star">*</span></label>
				<input className="form-textfield" onInput={handleEmail} id="contact-email" type="text" placeholder="KD6-3.7@lapd.gov" name="email" required autoComplete="email" />
			</div>

			<div className="contact-input">
				<label className="form-label" htmlFor="contact-message">Tell me your thoughts! <span className="form-star">*</span></label>
				<textarea className="form-textarea" id="contact-message" name="message" placeholder='"And blood-black nothingness began to spin -- a system of cells interlinked within, cells interlinked within cells interlinked, within one stem. -- And dreadfully distinct, against the dark, a tall white fountain played." - Vladimir Nabokov, Pale Fire qtd. in Blade Runner 2049' required></textarea>
			</div>

			<button className="button form-submit" id="contact-submit">Submit</button>
		</form>
	)
}

export default EmailForm