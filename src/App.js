import styled from 'styled-components';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
        <Wrapper>
          cards
        </Wrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.div``;

const Wrapper = styled.div``;

export default App;
