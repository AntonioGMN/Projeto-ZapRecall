import ReactDOM from "react-dom";
import TelaInicial from "./telas/telaInicial";
import TelaFlashCard from "./telas/telaFlashCard";
import TelaFinal from "./telas/telaFinal";

function Main() {
	return (
		<>
			<TelaInicial />
			{/* {<TelaFlashCard />} */}
			{/* <TelaFinal /> */}
		</>
	);
}

ReactDOM.render(<Main />, document.querySelector(".root"));
