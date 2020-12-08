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

export const Item = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0px;
  align-items: center;
  cursor: pointer;
  & img {
    width: 17px;
    height: auto;
    margin-right: 7px;
    margin-bottom: 1px;
  }
  & a {
    color: #557086;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
  }
`
