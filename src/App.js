import logo from "./logo.svg";
import "./App.css";
import Card from "./components/UI/Card";
import Inc from "./components/UI/Incrementor/incrementor";

function App() {
  return (
    <div className="App-header">
      <Card>
        <p> Hi Asanka</p>
      </Card>
      <Card>
        <p> Hi Asanka</p>
      </Card>
      <Inc></Inc>
    </div>
  );
}

export default App;
