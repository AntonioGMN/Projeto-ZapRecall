import Logo from "./logo";

export default function TelaInicial() {
	return (
		<section className="telaInicial">
			<Logo />
			<button data-identifier="start-zap-recall">
				Praticar React
				<div>
					<img src="img/Vector (1).png" />
					<img src="img/Vector (1).png" />
				</div>
			</button>
		</section>
	);
}
