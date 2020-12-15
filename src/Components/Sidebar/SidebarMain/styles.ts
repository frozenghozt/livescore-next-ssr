import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`

export const Title = styled.div`
  width: 100%;
  margin: 0px 0px 7px 0px;
  & span {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px 0px;
  & a:hover {
    transform: translateX(5px);
    transition: transform 200ms ease-in-out 0s;
  }
`
