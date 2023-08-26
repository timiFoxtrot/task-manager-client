import { useEffect, useState } from "react";
import { TaskFormData, TasksForm } from "../components/TasksForm";
import { TaskList } from "../components/TasksList";
import { Header, HomeWrapper } from "../styles/StyledHome";
import {
  addTask,
  deleteTask,
  getTasksByUser,
  getUserDetails,
} from "../api/api";

const Home = () => {
  const [tasks, setTasks] = useState<TaskFormData[]>([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("")

  useEffect(() => {
    const res = async () => {
      const tasksResponse: any = await getTasksByUser();
      console.log("tasksResponse", tasksResponse);
      setTasks(tasksResponse.data.tasks);

      const userDetail: any = await getUserDetails();
      console.log("user", userDetail);
      setUser(userDetail.data.data.username);
    };
    res();
  }, []);

  const handleAddTask = async (e: any, data: any) => {
    e.preventDefault();
    try {
      const res: any = await addTask(data);
      console.log("TaskRes", res);
      if (res.response) {
        const { data } = res.response
        if (data.message) {
          setError(data.message)
        } else if (data.errors) {
          const dataErrors = Object.keys(data.errors)
          dataErrors.forEach(() => {
            setError('error2')
          })
        }
        return
      }
      setTasks((prevItems) => [res.data.task, ...prevItems]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id: any) => {
    try {
      const res: any = await deleteTask(id);
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header>Howdy {user},</Header>
      <HomeWrapper>
        <TasksForm onAdd={handleAddTask} error={error}/>
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      </HomeWrapper>
    </>
  );
};

export default Home;
