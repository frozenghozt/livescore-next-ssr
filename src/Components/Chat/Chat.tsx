import React from 'react'
// Components
import ChatHeader from './ChatHeader/ChatHeader'
import ChatMessages from './ChatMessages/ChatMessages'
import ChatSender from './ChatSender/ChatSender'
// Styles
import { Container } from './styles'

const Chat: React.FC = () => {
  return (
    <Container>
      <ChatHeader />
      <ChatMessages />
      <ChatSender />
    </Container>
  )
}

export default Chat
