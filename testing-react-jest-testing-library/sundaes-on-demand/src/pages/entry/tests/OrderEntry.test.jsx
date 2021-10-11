import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils"; //custom render
import OrderEntry from "../OrderEntry";
import { rest } from "msw"; //to create new handlers
import { server } from "../../../mocks/server";
import userEvent from "@testing-library/user-event";

test("handles error for scoops and topping routes", async () => {
  //using .only, only rerun one test
  //ResetHandlers takes handlers as arguments and it just reset any hanlders that have those endpoints for the server
  //takes two arguments, the first argument will be a handler that will return an error for scoop.
  //the last argument to this reset handlers it to reset toppings
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry setOrderPhase={jest.fn()} />);
  //   const alerts = await screen.findAllByRole("alert", {
  //     name: "An unexpected error ocurred. Please try again later.",
  //   });

  /*When in need to wait for any period of time you can use waitFor, to wait for your expectations to pass. */

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");

    expect(alerts).toHaveLength(2);
  });
});

// test.skip("not a real test", () => {}); //with .skip run all the test exept this test

test("disable order button if there are no scoops ordered", async () => {
  render(<OrderEntry setOrderPhase={jest.fn()} />);

  // order button should be disabled at first, even before options load
  let orderButton = screen.getByRole("button", { name: /order sundae/i });
  expect(orderButton).toBeDisabled();

  //expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(orderButton).toBeEnabled();

  //expect button to be disabled again after removing scoop
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "0");
  expect(orderButton).toBeDisabled();
});
