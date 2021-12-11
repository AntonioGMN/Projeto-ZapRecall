import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles/reset.css";
import TelaInicial from "./telaInicial";
import TelaFinal from "./telaFinal";
import TelaFlashCard from "./telaFlashCard";

function Main() {
	return (
		<>
			<TelaInicial />
		</>
	);
}

ReactDOM.render(<Main />, document.querySelector(".root"));
