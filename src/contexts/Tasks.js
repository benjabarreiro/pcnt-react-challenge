import { createContext, useContext, useState, useEffect } from 'react';
import { UserContext } from './User';
import axios from 'axios';

export const TasksContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [filteredId, setFilteredId] = useState('ALL');

  const { userId } = useContext(UserContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        title: value,
        message: value
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading((prev) => !prev);
      setValue('');
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`);
      setList(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const fetchTasksByCompletion = async (id) => {
    try {
      const response = await axios.get(
        `https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}/${id}`
      );
      setList(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const completeTask = async (status, id) => {
    try {
      await axios.put(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        todoId: id,
        completed: !status
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading((prev) => !prev);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        todoId: id
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading((prev) => !prev);
    }
  };

  const deleteList = async () => {
    try {
      await axios.delete(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}/reset`);
    } catch (err) {
      setError(err);
    } finally {
      setIsloading((prev) => !prev);
    }
  };

  const getTasksByFilteredId = (id) => {
    switch (id) {
      case 'ALL':
        return fetchTasks();
      case 'COMPLETED':
        return fetchTasksByCompletion(true);

      case 'UNCOMPLETED':
        return fetchTasksByCompletion(false);

      default:
        return fetchTasks();
    }
  };

  useEffect(() => {
    if (userId) {
      getTasksByFilteredId(filteredId);
    }
  }, [isLoading, filteredId]);

  return (
    <TasksContext.Provider
      value={{
        value,
        list,
        addTask,
        handleChange,
        completeTask,
        deleteTask,
        deleteList,
        filteredId,
        setFilteredId,
        error
      }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
