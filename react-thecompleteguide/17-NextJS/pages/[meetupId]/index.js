//[meetupId] is an dynamic id passed by url 
import { MongoClient, ObjectId } from "mongodb"; //Mongo ObjectId value
import { Fragment } from "react";
import Head from 'next/head';

import MeetupDetail from "../../components/meetups/MeetupDetail";

/* Renders the meetupdetails */
function MeetupDetails(props){
    return (
        <Fragment>
            <Head>
                {/* All your head elements you can add them here */}
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://new-user_31:J11ECzvVYNeN2v9H@cluster0.c0zyk.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //The first argument defiens the find criteria. The second argument defines which fields should be extracted
    
    client.close();
    
    return { //we must describe al the dynamic segment values. So all the meetup IDs in this case for which this page should be pre-generated.
        //When yout set fallback to true or to blocking you're telling NextJS that the list of paths which you're specifying here, might not be exhaustive, there migth be more valid pages
        //So then NextJS will not respond a 404 page if it can't find the page immediately. It will then generate that page on demand and thereafter cache it, so it will pre-generate it when needed
        fallback: 'blocking', //This key tellsNextJS whether your paths array contains al supported parameter values or just some of them.
        //If fallback is false, that means that your paths contains all supported meetup ID values.
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        })),
        // paths: [ //Its an array with multiple objects, one object per version of this dynamic page
        //     {
        //         params: { //If you have multiple dynamic segments, then you would have multiple keys in this nested object. Here we have only meetupId
        //             meetupId: 'm1', //m1 is the concrete value for meetup ID for which this page should be pre-generated. 
        //         },
        //     },
        //     { //You would also fetch your supported IDs from a database or from an AI and generate this array dynamically
        //         params: {
        //             meetupId: 'm2',
        //         }
        //     }
        // ]
    }
}

//context exists only on getStaticProps. getStaticProps is pre-generated during the build process.This means that NextJS needs to pre-generate all versions of this dynamic page, for all the supported IDs
export async function getStaticProps(context) { //canot use react hooks in this function
    // the ID is encoded into the url
    //fetch data for a single meetup

    const meetupId = context.params.meetupId; //meetupId is the identifier that we have between the square brackets

    console.log('meetupId', meetupId);

    const client = await MongoClient.connect('mongodb+srv://new-user_31:J11ECzvVYNeN2v9H@cluster0.c0zyk.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }); //findOne finds one single document
    client.close();

    return {
        props:{
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address:selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetails;