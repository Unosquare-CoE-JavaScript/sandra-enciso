/**This Component sends an alert when an error occurs */
import Alert from "react-bootstrap/Alert";

export default function AlertBanner({
  message = "An unexpected error occured. Please try again later",
  variant = "danger",
}) {
  const alertMessage = message;
  const alertVariant = variant;

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
