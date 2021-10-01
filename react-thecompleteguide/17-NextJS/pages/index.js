/* This is the main file of the project using NextJS */
import Head from 'next/head'; //This component, allow us to add head elements to the head section of your page
import { MongoClient } from 'mongodb'; //Create a new MongoClient instance.
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: 'This is a first meetup!'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
//         address: 'Some address 10, 12345 Some City',
//         description: 'This is a second meetup!'
//     }
// ];


function HomePage(props){

    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    //If we wanna send a HTTP request when the page is rendered, we must use useEffect
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);
    return (
        <Fragment>
            <Head>
                {/* All your head elements you can add them here */}
                <title>React Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

//Alternative to static props
// export async function getServerSideProps(context) {
//     /* The difference to getStaticProps is that this function will now not run during the build process but instead always on the server after deployment */
//     // Any code you write in here will always run on the server, never in the client
//     //fetch data from an API
//     //This runs for every incoming request anyways, so there is no need to revalidate every x seconds

//     const req = context.req; // Request object
//     const res = context.res; // The response will be sent back


//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         } 
//     };
// }

/* Static generation */
/* Next.js will pre-render this page at build time using the props returned by getStaticProps. */
/* this now only works in your page component files, not in other component files. Only in component files inside of the pages folder */
export async function getStaticProps() { //NextJS first of all execute this before it calls the component function. executes this during this pre-rendering process
    //this code is executed during the build process
    //fetch data from an API
    //fetch(); //with NextJS you can use fetch() in server side code

    /* Connects to the Mongo Atlas db */
    const client = await MongoClient.connect('mongodb+srv://new-user_31:J11ECzvVYNeN2v9H@cluster0.c0zyk.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray(); //find and returns all the documents in that collection

    client.close(); //Closing the connection

    return { //you always need to return a object
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            })),
        },
        revalidate: 1  //using getStaticProps, we unlock a feature called incremental Static Generation. Revalidate wants a number, this is the second that NextJS will wait util it regenerate this page

    }
} 
export default HomePage;