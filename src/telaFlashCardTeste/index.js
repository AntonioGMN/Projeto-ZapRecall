import { useState } from "react";
import Logo from "./logo";

const deck = [
	{
		pergunta: "O que é JSX?",
		resposta: "Uma extensão de linguagem do JavaScript",
	},
	{
		pergunta: "Gatos são ___?",
		resposta: "felinos",
	},
];

function Card({ pergunta, resposta }) {
	const [estado, setEstado] = useState("front");

	return (
		<main
			className={`card ${estado}`}
			data-identifier="flashcard"
		>
			<header>
				<p>{pergunta}</p>
				<div>1/{deck.length}</div>
			</header>
			<h1>{pergunta}</h1>
			<ion-icon
				onClick={() => setEstado("back")}
				name="arrow-undo-sharp"
			></ion-icon>
		</main>
	);
}

export default function TelaFlashCard() {
	return (
		<>
			<Logo />
			<section className="telaCard">
				<Card pergunta={deck[0].pergunta} />
			</section>
		</>
	);
}
