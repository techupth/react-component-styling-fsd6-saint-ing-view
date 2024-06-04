// Start coding here
import {
  LogoErrorBox,
  LogoInfoBox,
  LogoWarningBox,
  LogoSuccessBox,
} from "./img";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.AlertStyle === "ErrorBox") {
    return (
      <div
        css={css`
          background-color: red;
          border-radius: 5px;
          padding: 5px;
          margin: 10px;
          color: black;
        `}
      >
        <LogoErrorBox />
        This is error alert box
      </div>
    );
  } else if (props.AlertStyle === "WarningBox") {
    return (
      <div
        css={css`
          background-color: orange;
          border-radius: 5px;
          padding: 5px;
          margin: 10px;
          color: black;
        `}
      >
        <LogoWarningBox />
        This is warning alert box
      </div>
    );
  } else if (props.AlertStyle === "InfoBox") {
    return (
      <div
        css={css`
          background-color: yellow;
          border-radius: 5px;
          padding: 5px;
          margin: 10px;
          color: black;
        `}
      >
        <LogoInfoBox />
        This is info alert box
      </div>
    );
  } else if (props.AlertStyle === "SuccessBox") {
    return (
      <div
        css={css`
          background-color: green;
          border-radius: 5px;
          padding: 5px;
          margin: 10px;
          color: black;
        `}
      >
        <LogoSuccessBox />
        This is success alert box
      </div>
    );
  }
}

export default Alert;
