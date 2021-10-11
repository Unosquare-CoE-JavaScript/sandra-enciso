import Todo from './components/Todo';
/* React.js way looks a bit more complex because we got more files involved here 
React splitting your application into small bulding blocks, small components and every component has a clear task and you code stays maintainable and manageable
*/
//The main code
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' /> {/* Custom HTML component which sends text prop */}
      {/* <Todo text='Learn React again' />  If we want another todo*/}
    </div>
  );
}

export default App;
