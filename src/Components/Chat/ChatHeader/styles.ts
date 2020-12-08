import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0 17px;
  min-height: 55px;
`

export const ChatSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: auto;
  font-size: 15px;
  font-weight: 500;
`

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChatLightStyle = styled.span`
  background: rgb(18, 196, 2);
  border-radius: 50%;
  height: 7px;
  width: 7px;
  margin: 0;
  box-shadow: 0 0 0 rgb(18, 196, 2);
  animation: pulse 1.6s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(18, 196, 2, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0);
    }
  }
`

export const Number = styled.span`
  display: inline-flex;
  font-size: 14px;
  margin-left: 7px;
  font-weight: 500;
`
