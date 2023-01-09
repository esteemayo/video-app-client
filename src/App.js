import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import { darkTheme, lightTheme } from 'utils/Theme';
import { Home, SharedLayout, SignIn, Video } from 'pages';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/' element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path='signin' element={<SignIn />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>
                cards
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

export default App;
