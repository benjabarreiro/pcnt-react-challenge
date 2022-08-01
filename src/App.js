import { Header } from './components/Header';
import styled from 'styled-components';
import UserProvider from './contexts/User';
import TasksProvider from './contexts/Tasks';
import { Main } from './containers/Main';

const Background = styled.div`
  height: 100%;
  background-color: #f1f1f1;
`;

function App() {
  return (
    <UserProvider>
      <TasksProvider>
        <Background>
          <Header />
          <Main />
        </Background>
      </TasksProvider>
    </UserProvider>
  );
}

export default App;
