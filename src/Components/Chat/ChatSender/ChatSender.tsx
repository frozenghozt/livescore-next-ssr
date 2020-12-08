import React, { useState } from 'react'
// Styles
import { Container, SendMessage } from './styles'
// Icon
import SendIcon from '@material-ui/icons/Send'

const ChatSender: React.FC = () => {
  const [message, setMessage] = useState('')

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <Container>
      <SendMessage>
        <input
          type="text"
          onChange={textHandler}
          placeholder="Press enter to send your message"
          value={message}
        />
        <button type="submit">
          <SendIcon fontSize="small" />
        </button>
      </SendMessage>
    </Container>
  )
}

export default ChatSender
