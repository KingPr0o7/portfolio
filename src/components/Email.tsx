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
	
const baseUrl = import.meta.env.SITE;
const date = new Date();
const year = date.getFullYear();
	
export const Email = ({ name, input }: EmailProps) => {	
	return (
		<Html>
			<Head />
			<Preview>Your thoughts have been delivered to Nathan Parker!</Preview>
			<Body style={main}>
				<Container style={container}>
					<Row>
						<Column style={logo}>
							<Link href={baseUrl}>
								<Img width={300} src={`${baseUrl}/email/logo.png`} style={{ margin: "0px auto" }} />
							</Link>
						</Column>
					</Row>

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
			
					<Section style={sectionsBorders}>
						<Row>
							<Column style={footerBorder} />
						</Row>
					</Section>

					<Section style={footer}>
						<Row>
							<Column style={socials}>
								<Link href="https://twitter.com/KingPr0o7" style={social_link}>
									<Img width={32} height={32} src={`${baseUrl}/email/x.png`} />
								</Link>
								<Link  href="https://github.com/KingPr0o7" style={social_link}>
									<Img width={32} height={32} src={`${baseUrl}/email/github.png`} />
								</Link>
								<Link href="https://discord.gg/ksW8rAcU6t" style={social_link}>
									<Img width={32} height={32} src={`${baseUrl}/email/discord.png`} />
								</Link>
								<Link href="https://www.linkedin.com/in/nathanparker07/" style={social_link}>
								<Img width={32} height={32} src={`${baseUrl}/email/linkedin.png`} />
								</Link>
							</Column>
						</Row>
						<Row>
							<Text style={{ textAlign: "center" }}>
								Copyright {year} Nathan Parker. All Rights Reserved <br />
								A software developer working towards his dreams -- to make big things happen.
							</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};
	
export default Email;
	
const fontFamily = "Rubik,HelveticaNeue,Helvetica,Arial,sans-serif";
	
const main = {
	fontFamily,
	margin: '0px',
	backgroundColor: "#FFFFFF",
};

	const container = {
		maxWidth: "580px",
	};

		const logo = {
			paddingTop: "20px",
			paddingBottom: "20px",
		};

		const sectionsBorders = {
			width: "100%",
			display: "flex",
		};

			const sectionBorder = {
				borderBottom: "1px solid rgb(238,238,238)",
				width: "40px",
			};

				const sectionCenter = {
					borderBottom: "1px solid #378CE1",
					width: "540px",
				};

			const footerBorder = {
				borderBottom: "1px solid rgb(238,238,238)",
				width: "580px",
			};

		const content = {
			padding: "5px 15px 10px 15px",
		};

			const paragraph = {
				lineHeight: 1.5,
				fontSize: 14,
				color: "#000000",
			};

				const user_text = {
					lineHeight: 1.5,
					fontSize: 14,
					border: "2px solid #084c9a",
					padding: 10,
					borderRadius: "10px",
					color: "#000000",
				}
	
	const footer = {
		padding: 10,
		borderRadius: "10px",
	};

		const socials = {
			display: "flex",
			width: "fit-content",
			margin: "0px auto",
		}	
	
			const social_link = {
				padding: "0px 15px 0px 15px",
			};

const link = {
	textDecoration: "underline",
};