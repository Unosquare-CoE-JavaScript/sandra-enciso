// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

//Mock service worker config
// src/setupTests.js
import { server } from "./mocks/server.js";
// Establish API mocking before all tests.
beforeAll(() => server.listen()); //before all test, its having the server listen
/* Any network requests that come through route them to mock service worker instead of the actual network */

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers()); //After each test, reset the handlers to what they were when we defined the server.
/* Thats good because eventually we are going to have specific handles for specific test, namely we're going to make the server return an error in some test
where we want to test what the what happens in our app if we get an error from the server */

// Clean up after the tests are finished.
afterAll(() => server.close()); //finally, when the test are finish, close the server just to keep everything neat and tidy
