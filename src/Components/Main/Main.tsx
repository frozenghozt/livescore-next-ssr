import React from 'react'
// Components
import Header from './Header/Header'
import Body from './Body/Body'
// Styles
import { Container } from './styles'

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  )
}

export default Main
