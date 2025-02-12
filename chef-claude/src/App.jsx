import "./assets/css/App.css";
import chefLogo from "./assets/images/logo-chef-claude.png";
import Main from "./components/Main.jsx";

const App = () => {
  return (
    <>
      <header>
        <img
          onClick={() => window.location.reload()}
          src={chefLogo}
          alt="chef icon"
          className="nav-logo"
        />
      </header>

      <Main />
    </>
  );
};

export default App;
