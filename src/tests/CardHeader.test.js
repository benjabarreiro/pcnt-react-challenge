import { render, fireEvent, screen } from '@testing-library/react';
import { CardHeader } from '../components/CardHeader';
import DropdownProvider from '../contexts/Dropdown';
import TasksProvider from '../contexts/Tasks';
import UserProvider from '../contexts/User';

const componentsToRender = (
  <UserProvider>
    <TasksProvider>
      <DropdownProvider>
        <CardHeader />
      </DropdownProvider>
    </TasksProvider>
  </UserProvider>
);

describe('Card Header actions', () => {
  test('Check dropdown opens and close', () => {
    render(componentsToRender);

    const clickDropdown = screen.getByRole('span');
    fireEvent.click(clickDropdown);

    const dropdown = screen.getByRole('list');
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(clickDropdown);
    expect(dropdown).not.toBeInTheDocument();
  });

  test('Check dropdown closes when click on item in the list', () => {
    render(componentsToRender);

    const clickDropdown = screen.getByRole('span');
    fireEvent.click(clickDropdown);

    const dropdownList = screen.getByRole('list');
    expect(dropdownList).toBeInTheDocument();

    const listItem = screen.getByText('Realizados');
    fireEvent.click(listItem);

    expect(dropdownList).not.toBeInTheDocument();
  });

  test("Check new list modal opens and closes", () => {
    render(componentsToRender)

    const clickNewListIcon = screen.getByAltText('New list button')
    fireEvent.click(clickNewListIcon)

    const modalHeading = screen.getByText('Empezar nueva lista')
    expect(modalHeading)

    const closeList = screen.getByText('Cancelar')
    fireEvent.click(closeList)

    expect(modalHeading).not.toBeInTheDocument()
  })
});
