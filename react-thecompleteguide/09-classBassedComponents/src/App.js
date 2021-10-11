import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

/* Here uses the context only to pass all the user through the components */
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

/*
componentDidMount() Called once component mounted (was evaluated & rendered) = useEffect(...,[])
componentDidUpdate() Called once component updated (was evaluated & rendered) = useEffect(...,[someValue])
componentWillUnmount() called right before component is unmounted (removed from DOM) = useEffect(()=>{return()=>{...}},[]) //cleanup useEffect
*/