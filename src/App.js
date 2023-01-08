import styled from 'styled-components';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
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
