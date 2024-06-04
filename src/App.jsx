import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button btncolor="primary" />
        <Button btncolor="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert alertType="error" />
        <Alert alertType="warning" />
        <Alert alertType="info" />
        <Alert alertType="success" />
      </div>
    </div>
  );
}

export default App;
