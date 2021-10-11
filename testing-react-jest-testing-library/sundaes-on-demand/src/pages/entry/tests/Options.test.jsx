import { render, screen } from "../../../test-utils/testing-library-utils"; //custom render

import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import userEvent from "@testing-library/user-event";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // find images
  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  }); /*The $ sing means that scoop is at the end of the string */
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  /* Get alt text of all the images using map, then map this array of elements to an array of alt text */
  const altText = scoopImages.map((element) => element.alt);
  /* Arrays and objects use toEqual. Primitives values toBe */
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  /* The test itself only deals with mock service worker in that set up file that we where we configured the service worker to intercept network requests */
});

test("Displays image for each toppings option from server", async () => {
  //Mock Service Worker will return three toppings from server
  render(<Options optionType="toppings" />);

  //find images, expect 3 based on wht msw returns
  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  //check the actual alt text for the images
  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("don't update total if scoops input is invalid", async () => {
  render(<Options optionType="scoops" />); //this are wrapped into provider

  //expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole("spinbutton", {
    //via server call
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "-1"); //invalid value

  //make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText("Scoops total: $0.00");
  expect(scoopsSubtotal).toBeInTheDocument();
});
