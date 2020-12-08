import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  flex-shrink: 0;
  height: 100vh;
  padding: 0px 23px;
  background-color: ${props => props.theme.dark.backgroundSide};
`
