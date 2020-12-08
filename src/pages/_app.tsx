import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
// Components
import Sidebar from '../Components/Sidebar/Sidebar'
import Main from '../Components/Main/Main'
import Chat from '../Components/Chat/Chat'
// Styles
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { Container } from '../styles/pages/Home'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Chat />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
