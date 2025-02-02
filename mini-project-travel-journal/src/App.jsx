import "./App.css";
import globe from "./assets/images/icon-globe.svg";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <header>
        <img src={globe} alt="globe icon" />
        <h1>my travel journal</h1>
      </header>

      <main>
        <Card />
      </main>
    </>
  );
};

export default App;
