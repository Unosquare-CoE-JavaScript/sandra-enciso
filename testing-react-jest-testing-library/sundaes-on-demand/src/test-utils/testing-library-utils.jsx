/*
Custom Render
It's often useful to define a custom render method that includes things like global context providers, data stores, etc.
To make this available globally, one approach is to define a utility file that re-exports everything from React Testing Library.
You can replace React Testing Library with this file in all your imports.
*/
import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from "@testing-library/react";

//override render method
export { renderWithContext as render };
/* So now, if we want to render with context, we'll import from this file and if we dont want to render with context, we can import from testing librarry react */
