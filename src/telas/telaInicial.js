import Logo from "./logo";
import ReactDOM from "react-dom";
import TelaFlashCard from "./telaFlashCard";

export default function TelaInicial() {
	return (
		<section className="telaInicial">
			<Logo />
			<button
				onClick={() =>
					ReactDOM.render(
						<TelaFlashCard />,
						document.querySelector(
							".root"
						)
					)
				}
				data-identifier="start-zap-recall"
			>
				Praticar React
				<div>
					<img src="img/Vector (1).png" />
					<img src="img/Vector (1).png" />
				</div>
			</button>
		</section>
	);
}
