import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --main-selection-color: rgba(221, 123, 44, 1);
    --main-selection-color-light: rgba(221, 123, 44, .7);
  }

  ::-webkit-calendar-picker-indicator {
    color: red;
    filter: brightness(0) saturate(100%) invert(58%) sepia(73%) saturate(1540%) hue-rotate(342deg) brightness(92%) contrast(88%);
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: #1F2137;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }

  #root {
    min-height: inherit;
  }
`