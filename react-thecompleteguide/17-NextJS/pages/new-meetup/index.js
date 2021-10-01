import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {

    const router = useRouter();

    //This functions send our data to our API route
    async function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        //router.replace() // using replace to make sure we can't go back with the back button 
        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a new Meetup</title>
                <meta
                    title='description'
                    content='Add your own meetups and create amazing networking opportunities.'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}  />
        </Fragment>
    )
}

export default NewMeetupPage;