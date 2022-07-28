import { Header } from "./components/Header";
import { EmptyList } from "./containers/EmptyList";
import styled from "styled-components";

const Background = styled.div`
  height: 100%;
  background-color: #f1f1f1;
`;

function App() {
  return (
    <Background>
      <Header />
      <EmptyList />
    </Background>
  );
}

export default App;
