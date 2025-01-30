import "./assets/css/App.css";
const Main = () => {
  return (
    <main>
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img
        className="background-img-react"
        src="/src/assets/images/icon-react-480.png"
        alt="react icon"
      />
    </main>
  );
};
export default Main;
