import styled from 'styled-components';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
      </Main>
    </Container>
  );
}

const Container = styled.div``;

const Main = styled.div``;

export default App;
