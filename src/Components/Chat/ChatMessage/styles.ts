import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3px;
  margin: 4px 0px;
`

export const Image = styled.div`
  display: flex;
  align-items: center;
  > img {
    height: 35px;
    width: 35px;
    border-radius: 5px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

export const Username = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 3px;
`

export const Message = styled.div`
  font-size: 14px;
`
