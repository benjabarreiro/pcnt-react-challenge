import { Header } from "./components/Header";
import { EmptyList } from "./containers/EmptyList";
import styled from "styled-components";
import UserProvider from "./contexts/User";

const Background = styled.div`
  height: 100%;
  background-color: #f1f1f1;
`;

function App() {
  return (
    <UserProvider>
      <Background>
        <Header />
        <EmptyList />
      </Background>
    </UserProvider>
  );
}

export default App;
