import ReactDOM from "react-dom";
import Logo from "../Logo";
import TelaFlashCard from "../telaFlashCard";
import "./styles.css";

export default function TelaInicial() {
	return (
		<section className="telaInicial">
			<Logo />
			<button
				onClick={() =>
					ReactDOM.render(
						<TelaFlashCard
							incide={1}
						/>,
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
