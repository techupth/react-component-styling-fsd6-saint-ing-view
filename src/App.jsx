/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button buttonStyle="primary" />
        <Button buttonStyle="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert AlertStyle="ErrorBox" />
        <Alert AlertStyle="WarningBox" />
        <Alert AlertStyle="InfoBox" />
        <Alert AlertStyle="SuccessBox" />
      </div>
    </div>
  );
}

export default App;
