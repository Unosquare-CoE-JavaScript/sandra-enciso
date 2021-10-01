import { Fragment, Component } from 'react';
import UsersContext from '../store/users-context';

import Users from './Users';
import ErrorBoundary from './ErrorBoundary';

//You can only conect one context to the class component
class UserFinder extends Component{
    static contextType = UsersContext;

    constructor(){
        super();
        this.state = {
            filteredUsers: this.context.users,
            searchTerm: ''
        }
    }

    componentDidMount(){
      //send http request.
      this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState){ //Its like useEfect
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render(){
        return (
            <Fragment>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <ErrorBoundary>
                  <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

/* const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
}; */

export default UserFinder;