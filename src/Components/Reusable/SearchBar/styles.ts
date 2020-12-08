import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  visibility: hidden !important;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  background-color: #192c38;
  border-radius: 4px;
  padding: 5px;
  & input {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 5px;
    justify-content: flex-end;
    background-color: #213743;
    border-radius: 3px;
    width: 100%;
    min-width: 170px;
    border-color: transparent;
    outline: none;
  }
`

export const Search = styled.div`
  display: flex;
  visibility: visible !important;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  width: 60%;
  background-color: #192c38;
  border-radius: 4px;
  padding: 5px;
  justify-content: center;
  & input {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 5px;
    justify-content: flex-end;
    background-color: #213743;
    border-radius: 3px;
    width: 100%;
    min-width: 170px;
    border-color: transparent;
    outline: none;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 7px 0px 7px;
  width: 100%;
  & li {
    list-style: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin: 2px 0px;
  }
`
