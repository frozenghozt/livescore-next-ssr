import React from 'react'
// Styles
import { Container, Image, Content, Username, Message } from './styles'
// Images
import Avatar from '../../../assets/avatar.png'

const ChatMessage: React.FC = () => {
  return (
    <Container>
      <Image>
        <img src={Avatar} alt="defaultimg" />
      </Image>
      <Content>
        <Username>Frozenghozt</Username>
        <Message>Any message to display</Message>
      </Content>
    </Container>
  )
}

export default ChatMessage
