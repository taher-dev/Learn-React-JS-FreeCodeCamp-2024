import "./assets/css/App.css";
import chefLogo from "./assets/images/logo-chef-claude.png";
import Main from "./components/Main.jsx";

const App = () => {
  return (
    <>
      <header>
        <img src={chefLogo} alt="chef icon" />
      </header>

      <Main />
    </>
  );
};

export default App;
