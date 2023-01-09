import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import { Home, SharedLayout } from 'pages';

function App() {
  return (
    <Container>
      <Router>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/' element={<SharedLayout />}>
                <Route index element={<Home />} />
              </Route>
              cards
            </Routes>
          </Wrapper>
        </Main>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

export default App;
