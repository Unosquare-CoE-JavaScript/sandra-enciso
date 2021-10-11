/* Gets a list of meetups from a server by  sending a HTTP request */
import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  /* useEffect is a hook that allows you to run some code under certain conditions */
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-1b7b8-default-rtdb.firebaseio.com/meetups.json')
    .then(response => {
      return response.json();
    }).then(data => {
      /* Firebase returns an object */
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false)      
      setLoadedMeetups(meetups);
    });
  }, []); //array of dependencies. If the array is empty, is like componentDidMount

  if(isLoading){
    return (
      <section>
        <p>Loading</p>
      </section>
    )
  }

  return (
      <section>
          <h1>All Meetups</h1>
          <ul>
              <MeetupList meetups={loadedMeetups} />
          </ul>
      </section>
  )
}

export default AllMeetupsPage;