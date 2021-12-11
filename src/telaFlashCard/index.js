import { useState } from "react";
import ReactDOM from "react-dom";

import Logo from "../Logo";
import TelaFinal from "../telaFinal";
import Sucesso from "../sucesso";
import Falha from "../falha";
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
	{
		pergunta: "Cachorros são ___?",
		resposta: "canimus",
	},
];

export default function TelaFlashCard() {
	const [estado, setEstado] = useState("front");
	const [indice, setIndice] = useState(0);
	const [sucesso, setSucesso] = useState(true);

	function Card({ pergunta, resposta }) {
		function mudaTela() {
			if (estado === "front") {
				setEstado("back");
			} else if (indice + 1 === deck.length) {
				if (sucesso) {
					ReactDOM.render(
						<TelaFinal>
							<Sucesso />
						</TelaFinal>,
						document.querySelector(
							".root"
						)
					);
				} else {
					ReactDOM.render(
						<TelaFinal>
							<Falha />
						</TelaFinal>,
						document.querySelector(
							".root"
						)
					);
				}
			} else {
				setEstado("front");
				setIndice(indice + 1);
			}
		}

		return (
			<main
				className={`card ${estado}`}
				data-identifier="flashcard"
			>
				<header>
					<p>{pergunta}</p>
					<div>
						{indice + 1}/
						{deck.length}
					</div>
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
						onClick={() => {
							setEstado(
								"back nãoLembrei respondido"
							);
							setSucesso(
								false
							);
						}}
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

	const cards = deck.map((deck) => (
		<Card pergunta={deck.pergunta} resposta={deck.resposta} />
	));

	return (
		<>
			<Logo />
			<section className="telaCard">
				{/* <Card
					pergunta={deck[0].pergunta}
					resposta={deck[0].resposta}
				/> */}
				{cards[indice]}
			</section>
		</>
	);
}
