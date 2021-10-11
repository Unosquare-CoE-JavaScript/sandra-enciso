import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();


  /* We don't need to work with useCallback or nything like this here because we are only calling sendTaskRequest in the enterTaskHandler, not inside of useEffetc or anything like that
  therefore here, we won't have the problem of an infinite loop, because this request will not be sent whenever the component is re-evaluated
  */
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({ 
      url: 'https://react-http-39a5b-default-rtdb.firebaseio.com/tasks.json', 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: taskText })
    }, createTask.bind(null, taskText));

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
