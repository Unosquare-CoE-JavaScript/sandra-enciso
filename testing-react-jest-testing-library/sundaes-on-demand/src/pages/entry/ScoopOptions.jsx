import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function ScoopOptions({ name, imagePath, updateItemCount }) {
  const [isValid, setIsValid] = useState(true); //state for is valid
  const handleChange = (e) => {
    const currentValue = e.target.value;
    //updateItemCount(name, e.target.value);

    //make sure we're using a number and not a string to validate
    const currentValueFloat = parseFloat(currentValue); //transform string to a number

    const valueIsValid =
      0 <= currentValueFloat &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat;
    /*The Math.floor() function returns the largest integer less than or equal to a given number. */

    //validate
    setIsValid(valueIsValid);

    //only update context if the value is valid
    if (valueIsValid) updateItemCount(name, currentValue);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            onChange={handleChange}
            type="number"
            defaultValue={0}
            isInvalid={!isValid}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
