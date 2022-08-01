import { createContext, useContext } from 'react';
import { TasksContext } from './Tasks';
import { useState } from 'react';

export const DropdownContext = createContext();

const list = [
  { text: 'Todos', id: 1, selected: true },
  { text: 'Realizados', id: 2, selected: false },
  { text: 'No realizados', id: 3, selected: false }
];

const DropdownProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('Todos');
  const [dropdownList, setDropdownList] = useState(list);
  const [open, setOpen] = useState(false);
  const { setId } = useContext(TasksContext);

  const selectedHandler = (id) => {
    const array = [...dropdownList];
    array.map((x) => {
      if (x.id === id) {
        setId(id);
        setSelectedItem(x.text);
        x.selected = true;
      } else {
        x.selected = false;
      }
    });
    setDropdownList(array);
    setOpen(false);
  };

  const dropdownHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DropdownContext.Provider
      value={{ dropdownList, selectedItem, open, selectedHandler, dropdownHandler, setOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
