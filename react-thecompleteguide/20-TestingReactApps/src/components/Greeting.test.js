/* render. Render into a container which is appended to document.body.
All of the queries exported by DOM Testing Library accept a container as the first argument. 
Because querying the entire document.body is very common, 
DOM Testing Library also exports a screen object which has every query that is pre-bound to document.body (using the within functionality).
 Wrappers such as React Testing Library re-export screen so you can use it the same way.
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // fire a user event
import Greeting from './Greeting'; 

describe('Greeting component', () => { //one suite
    test('renders "Hello World" as a text', () => { //one test
        //Arrange
        render(<Greeting />);

        //Act
        // ...nothing

        //Asert
        //screen.getByText('Hello World', { exact: false }) //configure if you want an exact match

        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });
    
    test('renders "Changed!" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement) //simulates a click

        //Assert
        const outputElement = screen.getByText('Changed!', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement) //simulates a click

        //Assert
        /* Query by test retuns null if doesnt exist the element  */
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    });

});

