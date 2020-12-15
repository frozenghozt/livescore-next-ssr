import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Prismic from 'prismic-javascript'
// Components
import Sidebar from '../Components/Sidebar/Sidebar'
import Main from '../Components/Main/Main'
import Chat from '../Components/Chat/Chat'
// Styles
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { Container } from '../styles/pages/Home'
// Context
import { StructureProvider } from '../context/StructureContext'
// CMS
import { ClientPrismic } from '../../prismic-configuration'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StructureProvider value={pageProps.results}>
          <Sidebar />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Chat />
        </StructureProvider>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async appContext => {
  const data = await ClientPrismic(appContext.req).query(
    Prismic.Predicates.any('document.type', ['sidebar'])
  )
  return { pageProps: data }
}

export default MyApp
