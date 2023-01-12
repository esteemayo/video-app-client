import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import Navbar from 'components/Navbar';
import AuthRoute from 'utils/AuthRoute';
import ProtectedRoute from 'utils/ProtectedRoute';
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
                  <Route index element={<Home type='random' />} />
                  <Route path='trends' element={<Home type='trend' />} />
                  <Route path='subscriptions'
                    element={
                      <AuthRoute>
                        <Home type='subscriptions' />
                      </AuthRoute>
                    }
                  />
                  <Route path='signin'
                    element={
                      <ProtectedRoute>
                        <SignIn />
                      </ProtectedRoute>
                    }
                  />
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

const Wrapper = styled.div`
  padding: 2.2rem 9.6rem;
`;

export default App;
