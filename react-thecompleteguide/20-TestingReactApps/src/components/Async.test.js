import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeds', async () => {
        window.fetch = jest.fn() //Creates a mock function
        window.fetch.mockResolvedValueOnce({ //Simulates a fetch function, we're not actually sending a requet to the API
            json: async () => [ //Returns an array when json is called
                {
                    id: 'p1',
                    title: 'First Post'
                }
            ] 
        });
        render(<Async />);

        /* The difference between getAllByRole and findAllByRole is that in general all those find queries, return a promise.
        The testing library will basically reevaluate the screen a couple of times until this succeeds */
        //const listItemElements = screen.getAllByRole('listitem');
        const listItemElements = await screen.findAllByRole('listitem'); //the second argument is "exact", the third argument is that timeout period, 1s by default
        expect(listItemElements).not.toHaveLength(0);

    });
});