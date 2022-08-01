import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Check } from '../components/Check';
import TasksProvider from '../contexts/Tasks';
import UserProvider from '../contexts/User';

describe('Check Component', () => {
  test('Check component is checked', () => {
    render(
      <UserProvider>
        <TasksProvider>
          <Check />
        </TasksProvider>
      </UserProvider>
    );
    const checkContainer = screen.getByRole('span');
    fireEvent.click(checkContainer);

    const checkIcon = screen.findByAltText('checked');
    waitFor(() => expect(checkIcon).toBeInTheDocument());
  });

  test('Check component is unchecked', () => {
    render(
      <UserProvider>
        <TasksProvider>
          <Check />
        </TasksProvider>
      </UserProvider>
    );
    const checkContainer = screen.getByRole('span');
    fireEvent.click(checkContainer);

    const checkIcon = screen.queryByAltText('checked');
    waitFor(() => expect(checkIcon).toBeNull());
  });
});
