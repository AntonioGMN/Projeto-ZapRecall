import Logo from "./logo";

function FlashCard() {
	return (
		<main className="card">
			<header>1/8</header>
			<h1>Gatos são maus?</h1>
			<ion-icon name="arrow-undo-sharp"></ion-icon>
		</main>
	);
}

export default function TelaFlashCard() {
	return (
		<>
			<Logo />
			<section className="telaCard">
				<FlashCard />
			</section>
		</>
	);
}
