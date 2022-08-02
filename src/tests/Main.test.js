import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserProvider from '../contexts/User';
import TasksProvider from '../contexts/Tasks';
import { Main } from '../containers/Main';
describe('Main container', () => {
  test('Button disabled/enabled', async () => {
    render(
      <UserProvider>
        <TasksProvider>
          <Main />
        </TasksProvider>
      </UserProvider>
    );
    expect(await screen.findByRole('button', { name: /Agregar/i })).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/Escribí un item/i), '50');

    expect(await screen.findByRole('button', { name: /Agregar/i })).toBeEnabled();
  });
});
