import React from 'react'
// Styles
import {
  Container,
  ChatSpan,
  NumberContainer,
  ChatLightStyle,
  Number
} from './styles'

const ChatHeader: React.FC = () => {
  return (
    <Container>
      <ChatSpan>Chat</ChatSpan>
      <NumberContainer>
        <ChatLightStyle />
        <Number>2458</Number>
      </NumberContainer>
    </Container>
  )
}

export default ChatHeader
