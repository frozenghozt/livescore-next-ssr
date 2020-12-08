import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  min-height: 55px;
  max-height: 55px;
`

export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 33%;
`

export const CenterSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 34%;
`

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 33%;
  & button {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    outline: none;
    box-shadow: none;
    color: ${props => props.theme.dark.textPrimary};
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
  }
`
