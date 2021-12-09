import Logo from "./logo";

function Sucesso() {
	return (
		<>
			<h1>PARABÉNS!🥳</h1>
			<h2>Você não esqueceu de nenhum flashcard!</h2>
		</>
	);
}

function Falha() {
	return (
		<>
			<h1>Putz.. 😥</h1>
			<h2>
				Você esqueceu alguns flashcards..
				<br />
				Não desanime! Na próxima você consegue!
			</h2>
		</>
	);
}

export default function TelaFinal() {
	return (
		<>
			<Logo />
			<section className="telaFinal">
				<Sucesso />
			</section>
		</>
	);
}
