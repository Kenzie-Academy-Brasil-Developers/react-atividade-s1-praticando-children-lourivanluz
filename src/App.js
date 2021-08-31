import "./App.css";
import CenteredCards from "./components/centeredCards/index";
import DescriptionDay from "./components/descriptionDay";

function App() {
  let description = {
    segunda: {
      morning: " Assistir as Demos",
      evening: "Fazer as atividades",
    },
    terca: {
      morning: " Reunião do condomínio",
      evening: "Fazer as atividades",
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCards>
          <h1>Segunda-feira</h1>
          <DescriptionDay description={description.segunda} />
        </CenteredCards>
        <CenteredCards>
          <h1>Terça-feira</h1>
          <DescriptionDay description={description.terca} />
        </CenteredCards>
      </header>
    </div>
  );
}

export default App;
