import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 17px 20px 17px;
`
export const SendMessage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: center;
  width: 100%;
  input {
    width: 100%;
    padding: 12px 40px 12px 12px;
    border-radius: 3px;
    border: none;
    color: ${props => props.theme.dark.textPrimary};
    background-color: ${props => props.theme.dark.backgroundChatSender};
    &:focus {
      outline: none;
    }
  }
  button {
    position: absolute;
    display: flex;
    align-items: center;
    border: none;
    right: 10px;
    color: ${props => props.theme.dark.textPrimary};
    background: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`
