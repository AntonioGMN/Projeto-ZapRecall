import { useState } from "react";
import ReactDOM from "react-dom";

import Logo from "../Logo";
import TelaFinal from "../telaFinal";
import Sucesso from "../sucesso";
import "./styles.css";

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

	function mudaTela() {
		if (estado === "front") {
			setEstado("back");
		} else {
			ReactDOM.render(
				<TelaFinal>
					<Sucesso />
				</TelaFinal>,
				document.querySelector(".root")
			);
		}
	}

	return (
		<main
			className={`card ${estado}`}
			data-identifier="flashcard"
		>
			<header>
				<p>{pergunta}</p>
				<div>1/{deck.length}</div>
			</header>
			<h1 className="pergunta">{pergunta}</h1>
			<h2 className="resposta">{resposta}</h2>
			<ion-icon
				className="botão"
				onClick={mudaTela}
				name="arrow-undo-sharp"
			></ion-icon>
			<section className="respostas">
				<button
					className="aprendi"
					onClick={() =>
						setEstado(
							"back aprendi respondido"
						)
					}
				>
					Aprendi agora
				</button>
				<button
					className="nãoLembrei"
					onClick={() =>
						setEstado(
							"back nãoLembrei respondido"
						)
					}
				>
					Não lembrei
				</button>
				<button
					className="comEsforço"
					onClick={() =>
						setEstado(
							"back comEsforço respondido"
						)
					}
				>
					Lembrei com esforço
				</button>
				<button
					className="zap"
					onClick={() =>
						setEstado(
							"back zap respondido"
						)
					}
				>
					Zap!
				</button>
			</section>
		</main>
	);
}

export default function TelaFlashCard() {
	return (
		<>
			<Logo />
			<section className="telaCard">
				<Card
					pergunta={deck[0].pergunta}
					resposta={deck[0].resposta}
				/>
			</section>
		</>
	);
}
