import * as React from "react";
import {
	Body,
	Container,
	Column,
	Head,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
	
interface EmailProps {
	name?: string;
	input?: string;
}
	
const baseUrl = import.meta.env.BASE_URL ? `https://${import.meta.env.BASE_URL}` : "";
const date = new Date();
const year = date.getFullYear();
	
export const Email = ({ name, input }: EmailProps) => {	
	return (
		<Html>
			<Head />
			<Preview>You updated the password for your Twitch account</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={logo}>
						<Img width={300} src={`${baseUrl}/email/logo.png`} />
					</Section>

					<Section style={sectionsBorders}>
						<Row>
							<Column style={sectionBorder} />
							<Column style={sectionCenter} />
							<Column style={sectionBorder} />
						</Row>
					</Section>

					<Section style={content}>
						<Text style={paragraph}>Thank you for contacting me, <b>{name}</b>! This email is an <b>automated confirmation</b> that your information has been <b>processed</b> and <b>sent directly</b> to my <b>domain</b> inbox! <i>Thank you for taking the time to reach out</i>, and <b>below</b> is the content you want me to comment on: </Text>
						<Text style={user_text}>
							{input}
						</Text>
						<Text style={paragraph}>I take all contacts with <b>utmost attentiveness</b>, and you'll <i>most likely</i> get a response from me (<b>nathan@ncp.dev</b>) within a few hours. Don't worry about spelling or simple grammatical mistakes; however, if you want to add more, <b>feel free to reply</b>!</Text>
						<Text style={paragraph}>If you don't receive a response <b><i>within one week</i></b>, you've either been <b>ignored</b> (<i>content is <b>repugnant</b></i>), I'm taking a <b>break/vacation</b>, or your reply is <b>behind many others</b>. </Text>
					</Section>
				</Container>

				<Section style={footer}>
						<Row>
							<Column style={socials}>
								<Link style={link} href="https://twitter.com/KingPr0o7">
									<Img src={`${baseUrl}/email/x.svg`} />
								</Link>
								<Link style={link} href="https://github.com/KingPr0o7">
									<Img src={`${baseUrl}/email/github.svg`} />
								</Link>
								<Link style={link} href="https://discord.gg/ksW8rAcU6t">
									<Img src={`${baseUrl}/email/discord.svg`} />
								</Link>
								<Link style={link} href="https://www.linkedin.com/in/nathanparker07/">
								<Img src={`${baseUrl}/email/linkedin.svg`} />
								</Link>
							</Column>
						</Row>
						<Row>
							<Text style={{ textAlign: "center", color: "#706a7b" }}>
								Copyright {year} Nathan Parker. All Rights Reserved <br />
								Powered by: <Link style={link} href="https://resend.com/home">Resend</Link>, <Link style={link} href="https://react.email/">React Email</Link>, and the <Link style={link} href="https://demo.react.email/preview/twitch-reset-password.tsx?view=desktop">Modified Twitch Template</Link> <br />
								A software developer working towards his dreams -- to make big things happen.
							</Text>
						</Row>
				</Section>
			</Body>
		</Html>
	);
};
	
export default Email;
	
const fontFamily = "Rubik,HelveticaNeue,Helvetica,Arial,sans-serif";
	
const main = {
	backgroundColor: "#efeef1",
	fontFamily,
};

	const container = {
		maxWidth: "580px",
		margin: "30px auto",
		backgroundColor: "#ffffff",
		borderRadius: "10px",
		boxShadow: "0 0 10px rgba(0,0,0,0.15)",
	};

		const logo = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: 20,
		};

		const sectionsBorders = {
			width: "100%",
			display: "flex",
		};

			const sectionBorder = {
				borderBottom: "1px solid rgb(238,238,238)",
				width: "249px",
			};

				const sectionCenter = {
					borderBottom: "1px solid #378CE1",
					width: "540px",
				};

		const content = {
			padding: "5px 20px 10px 20px",
		};

			const paragraph = {
				lineHeight: 1.5,
				fontSize: 14
			};

				const user_text = {
					lineHeight: 1.5,
					fontSize: 14,
					border: "1px solid #000000",
					padding: 10,
					borderRadius: "10px",
				}
	
	const footer = {
		maxWidth: "580px",
		margin: "0 auto",
		padding: 10,
	};

		const socials = {
			display: "flex",
			justifyContent: "center",
			gap: 25,
			alignItems: "center",
		}	
	
const link = {
	textDecoration: "underline",
};