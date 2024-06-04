/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconError, IconWarning, IconInfo, IconSuccess } from "./icon";
function Alert(props) {
  if (props.style === "error") {
    return (
      <>
        <div
          css={css`
            display: flex;
            padding-left: 20px;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            width: 630px;
            height: 76px;
            background: #f9c8c8;
            font-size: 20px;
            font-weight: 700;
            color: #444444;
          `}
        >
          <IconError />
          This is error alertbox
        </div>
      </>
    );
  } else if (props.style === "warning") {
    return (
      <>
        <div
          css={css`
            display: flex;
            padding-left: 20px;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            width: 630px;
            height: 76px;
            background: #f9d9c8;
            font-size: 20px;
            font-weight: 700;
          `}
        >
          <IconWarning />
          This is warning alertbox
        </div>
      </>
    );
  } else if (props.style === "info") {
    return (
      <>
        <div
          css={css`
            display: flex;
            padding-left: 20px;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            width: 630px;
            height: 76px;
            background: #f9ebc8;
            font-size: 20px;
            font-weight: 700;
          `}
        >
          <IconInfo />
          This is info alertbox
        </div>
      </>
    );
  } else if (props.style === "success") {
    return (
      <>
        <div
          css={css`
            display: flex;
            padding-left: 20px;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            width: 630px;
            height: 76px;
            background: #cef7cd;
            font-size: 20px;
            font-weight: 700;
          `}
        >
          <IconSuccess />
          This is success alertbox
        </div>
      </>
    );
  }
}
export default Alert;
