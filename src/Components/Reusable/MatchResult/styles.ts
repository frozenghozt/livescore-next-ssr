import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px 1fr 60px;
  width: 100%;
  border-radius: 3px;
  margin: 1px 0px;
  padding: 2px 5px;
  &:hover {
    background-color: ${props => props.theme.dark.background};
  }
`

export const Timer = styled.span`
  justify-self: start;
  align-self: center;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.6);
`

export const Result = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  font-weight: 500;
  background-color: ${props => props.theme.dark.background};
  min-width: 40px;
  padding: 3px 3px;
  border-radius: 3px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
`

export const TeamOne = styled.span`
  font-size: 14px;
  justify-self: end;
  align-self: center;
  color: rgba(255, 255, 255, 0.85);
`

export const TeamTwo = styled.span`
  font-size: 14px;
  justify-self: start;
  align-self: center;
  color: rgba(255, 255, 255, 0.85);
`
