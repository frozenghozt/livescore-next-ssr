import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.dark.background};
    color: ${props => props.theme.dark.textPrimary};
    font: 400 16px Roboto, sans-serif;
  }

  /* ScrollBar */

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d424f;
    border-radius: 10px;
  }
`
