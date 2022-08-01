import { createContext, useContext, useState, useEffect } from 'react';
import { UserContext } from './User';
import axios from 'axios';

export const TasksContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [id, setId] = useState(1);

  const { userId } = useContext(UserContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await axios.post(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        title: value,
        message: value
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
      setValue('');
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`);
      if (userId) {
        setList(response.data);
      } else {
        setList([]);
      }
    } catch (err) {
      setError(err);
    } finally {
    }
  };

  const completeTask = async (status, id) => {
    setIsloading(true);
    try {
       await axios.put(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        todoId: id,
        completed: !status
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  const deleteTask = async (id) => {
    setIsloading(true);
    try {
      await axios.delete(`https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}`, {
        todoId: id
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  const deleteList = async () => {
    setIsloading(true);
    try {
      await axios.delete(
        `https://api-3sxs63jhua-uc.a.run.app/v1/todo/${userId}/reset`
      );
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  const filterTasks = (id) => {
    const array = [...list];
    switch (id) {
      case 2:
        return array.filter((x) => x.completed === true);

      case 3:
        return array.filter((x) => x.completed === false);

      default:
        return array;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [isLoading]);

  return (
    <TasksContext.Provider
      value={{
        value,
        list,
        addTask,
        handleChange,
        completeTask,
        filterTasks,
        deleteTask,
        deleteList,
        error,
        id,
        setId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
