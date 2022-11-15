import './style.css'
import { ThemeProvider } from 'styled-components'
import { Menu, Navbar } from './components'
import { darkTheme, lightTheme } from './utils/Theme'
import { useState } from 'react'
import { Container, Main, Wrapper } from './App.styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

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
                <Router />
              </Wrapper>
            </Main>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
