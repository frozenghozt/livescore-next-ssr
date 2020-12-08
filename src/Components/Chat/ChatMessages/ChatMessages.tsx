import React from 'react'
// Components
import ChatMessage from '../ChatMessage/ChatMessage'
// Styles
import { Container } from './styles'

const ChatMessages: React.FC = () => {
  return (
    <Container>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </Container>
  )
}

export default ChatMessages
