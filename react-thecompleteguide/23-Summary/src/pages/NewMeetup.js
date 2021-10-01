import { useHistory } from "react-router-dom"; /* this is a hook that uses history hook */

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    const history = useHistory(); //Allows us to manipulate the browser history, to navigate away for example

    function addMeetupHandler(meetupData){
        /* fetch allows us to send HTTP requests */
        fetch('https://react-getting-started-1b7b8-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData), //pass js objects to json format
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/') //replace with a new page, so cant go back
            //history.push('/') //push a new page into the stack of pages
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;