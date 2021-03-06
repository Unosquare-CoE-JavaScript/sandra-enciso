import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import Button from "react-bootstrap/Button";

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  //disable order button if there arent any scoops in order
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>{" "}
      {/* This button sends us to the review page */}
    </div>
  );
}
