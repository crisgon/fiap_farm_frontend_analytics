import "./App.css";
import { Button } from "@/components/ui/button";
import { firebase } from "host/firebase";

function App() {
  console.log("AUTH", firebase.auth);
  return (
    <div className="container">
      <div className="icon-container">
        <h2>📊</h2>
      </div>
      <h1 className="title">Fiap Farm Analytics</h1>

      <Button>Meu botão</Button>
    </div>
  );
}

export default App;
