import "./App.css";
import Thoughts from "./main_components/Thoughts";
import Tasks from "./main_components/Tasks";

function App() {

  return (
    <div className="App">
      <header className="App-header d-flex flex-sm-row">
        <Thoughts />
        <Tasks />
      </header>
    </div>
  );
}

export default App;
