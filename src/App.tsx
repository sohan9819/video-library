import './style.css'
import { ThemeProvider } from 'styled-components'
import { Menu, Navbar } from './components'
import { darkTheme, lightTheme } from './utils/Theme'
import { useState } from 'react'
import { Container, Main, Wrapper } from './App.styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Video, SignIn } from './pages'

export const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Container>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="signin" element={<SignIn />}></Route>
                    <Route path="video">
                      <Route path=":videoId" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
