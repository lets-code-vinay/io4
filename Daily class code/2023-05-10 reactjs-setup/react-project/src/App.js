import "./App.css";
import Button from "./components/Button/index.js";

function App() {
  return (
    <div className="App">
      <Button buttonName={"Login"} />
      <Button buttonName={"Logout"} />
      <Button />
      <Button buttonName={"Submit"} />
      <Button buttonName={"Clear"} />
    </div>
  );
}

export default App;
