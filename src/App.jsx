/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          {/* Render ตัว Button 2 แบบ */}
          <Button type="primary" />
          <Button type="secondary" />
        </div>
        <hr />
        <div className="alert-components-section">
          {/* Render ตัว Alert 4 แบบ */}
          <Alert style="error" />
          <br />
          <Alert style="warning" />
          <br />
          <Alert style="info" />
          <br />
          <Alert style="success" />
        </div>
      </div>
    </>
  );
}

export default App;
