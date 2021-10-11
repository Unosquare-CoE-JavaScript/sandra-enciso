/* This shows an optios for scoops and toppings for our ice cream and allows us to enter an order */
import { useState } from "react";
import Container from "react-bootstrap/Container";

import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";

import { OrderDetailsProvider } from "./contexts/OrderDetails";

export default function App() {
  //orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  //This Componet job is storage which component must to be shown
  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
      break;
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );

  // return (
  //   <Container>
  //     <OrderDetailsProvider>
  //       {/* Summary page and entry page need provider */}
  //       <OrderEntry />
  //     </OrderDetailsProvider>
  //     {/* confirmation page does not need provider */}
  //   </Container>
  // );
}
