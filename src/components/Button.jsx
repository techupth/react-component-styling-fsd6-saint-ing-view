// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let Bgcolor = undefined;
  if (props.buttonStyle === "primary") {
    Bgcolor = "blue";
  } else if (props.buttonStyle === "secondary") {
    Bgcolor = "skyblue";
  }
  return (
    <button
      css={css`
        background-color: ${Bgcolor};
        color: white;
        width: 8vw;
        margin: 5px;
      `}
    >
      Button
    </button>
  );
}

export default Button;
