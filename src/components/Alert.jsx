import info from "../svg/alert-circle.svg";
import warning from "../svg/alert-triangle.svg";
import success from "../svg/check-circle.svg";
import error from "../svg/frown.svg";

// Start coding here

// Create a mapping of alert types to their corresponding SVGs
const alertIcons = {
  error,
  warning,
  info,
  success,
};

function Alert({ alertType }) {
  return (
    <div className={`alert-${alertType}`}>
      <img src={alertIcons[alertType]} alt={`${alertType} icon`} />
      <div>This is {alertType} alert box</div>
    </div>
  );
}

export default Alert;
