/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          top: 291px;
          left: 119.14px;
          padding: 0px, 16px, 0px, 16px;
          border-radius: 4px;
          width: 171.19px;
          height: 50px;
          background-color: #074ee8;
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
        `}
      >
        button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          padding: 0px, 16px, 0px, 16px;
          border-radius: 4px;
          width: 171.19px;
          height: 50px;
          background-color: #07a4e8;
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
        `}
      >
        button
      </button>
    );
  }
}
export default Button;
