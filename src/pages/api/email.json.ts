import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_KEY)

export const POST: APIRoute = async({params, request}) => {
	const body = await request.json()
	const { to, from, html, subject, text } = body;

	if (!to || !from || !html || !subject || !text) {
		return new Response(null, {
			status: 400,
			statusText: 'Required fields are missing',
		})
	}

	const send = await resend.emails.send({
		from,
		to,
		subject,
		html,
		text,
	});

	if (send.data) {
		return new Response(
			JSON.stringify({
				message: send.data
			}),
			{
				status: 200,
				statusText: 'OK',
			}
		);	
	} else {
		return new Response(
			JSON.stringify({
				message: send.error
			}),
			{
				status: 500,
				statusText: 'Internal Server Error',
			}
		);
	}
  }