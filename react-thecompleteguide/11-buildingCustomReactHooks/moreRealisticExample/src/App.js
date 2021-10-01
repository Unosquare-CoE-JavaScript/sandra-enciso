/*
When you use a custom hook, which uses state and you use that hook in that component, that component will implicity use that state set up in the custom hook.
So the state configured in the custom hook is attached to the component where you use the custom hook. This is because...
functions are objects in JavaScript, and every time a function is recreated, even if it contains the same logic, it's a new object in memory and therefore, useEfect would treat it
as a new value and it would re execute it.
*/
import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);  

  // const transformTasks = useCallback(tasksObj => {
  //   const loadedTasks = [];
  //   for (const taskKey in tasksObj) {
  //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
  //   }
  //   setTasks(loadedTasks);
  // }, []); //these are guaranteed to never change

  const {isLoading, error, sendRequest: fetchTasks} = useHttp(); //can be called without any dependencies or without any parameters because we're passing the request specific configuration and the data transformation that should be applied after the request was sent directly to the request

  useEffect(() => {
    const transformTasks = tasksObj => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTasks({url: 'https://react-http-39a5b-default-rtdb.firebaseio.com/tasks.json'}, transformTasks);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
