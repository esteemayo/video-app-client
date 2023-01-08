import styled from 'styled-components';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Sidebar />
        <Wrapper>
          cards
        </Wrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div``;

const Wrapper = styled.div``;

export default App;
