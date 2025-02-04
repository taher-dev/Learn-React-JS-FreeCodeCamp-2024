import "./App.css";
import globe from "./assets/images/icon-globe.svg";
import Card from "./components/Card/Card";
import data from "./assets/js/data";

const App = () => {
  return (
    <>
      <header>
        <img src={globe} alt="globe icon" />
        <h1>my travel journal</h1>
      </header>

      <Card
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Mount Fuji",
        }}
      />
    </>
  );
};

export default App;
