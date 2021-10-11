/**
 * Component that show our order summary
 */
import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails"; //custom Hook (context)

export default function OrderSummary({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  const scoopArray = Array.from(orderDetails.scoops.entries()); // get our order details from context
  const scoopList = scoopArray.map(
    (
      [key, value] //Renders the list of our selected items (toppings and scoops)
    ) => (
      <li key={key}>
        {value} {key}
      </li>
    )
  );

  /* does not display toppings if toppings.size is 0 */
  const hasToppings = orderDetails.toppings.size > 0;
  let toppingsDisplay = null;

  if (hasToppings) {
    // if has toppings, then render a list of toppings
    const toppingsArray = Array.from(orderDetails.toppings.keys());
    const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);
    toppingsDisplay = (
      <>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>{toppingList}</ul>
      </>
    );
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}
