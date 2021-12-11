import Logo from "../Logo";
import "./styles.css";

export default function TelaFinal({ children }) {
	return (
		<>
			<Logo />
			<section className="telaFinal">
				{children}
			</section>
		</>
	);
}
