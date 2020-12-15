import styled from 'styled-components'

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  backdrop-filter: blur(3px);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 350px;
  background-color: ${props => props.theme.dark.background};
  border-radius: 5px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 8px 8px;
  span {
    display: inline;
    cursor: pointer;
    &:nth-child(1) {
      margin-right: 12px;
    }
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px 20px 20px 20px;
  label {
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
  }
  input {
    margin: 10px 0 15px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 8px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0);
    color: #000;
    &:focus {
      outline: none;
    }
  }
`

export const Button = styled.button`
  padding: 8px;
  color: #fff;
  background-color: ${props => props.theme.dark.backgroundChatSender};
  margin-top: 7px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`
