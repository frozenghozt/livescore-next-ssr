import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px 2vw;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (min-width: 1024px) {
    padding: 30px 5vw;
  }
`
