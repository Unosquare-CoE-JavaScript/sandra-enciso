/**
 * This component shows the options to prepare our Sundae, shows an image for each topping and scoop
 */
import axios from "axios"; //used to handle with requests
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOptions";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]); //stores the items (scoops and toppings) provided by a server request
  const [error, setError] = useState(false); // set the state of an error (true or false) if an error occur
  const [orderDetails, updateItemCount] = useOrderDetails(); // set te deails of our order (price, qty, selected items, etc)

  //OptionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true); //if an error occurs, set the error state as true
      });
  }, [optionType]); //aray of dependencies

  if (error) {
    // if an error occurs (error state true), then show an Alert Banner
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map(
    (
      item //maps the items, returns an array of components with images, description and price for each item
    ) => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        updateItemCount={
          (itemName, newItemCount) =>
            updateItemCount(itemName, newItemCount, optionType) //
        }
      />
    )
  );

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
