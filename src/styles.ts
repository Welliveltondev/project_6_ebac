import { createGlobalStyle } from 'styled-components'
export const cores = {
  salmon: '#E66767',
  white: '#FFF8F2',
  starFavorite: '#FFB930',
  Bege: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;

  body {
    background-color: ${cores.white};
  }
}

.container {
  max-width: 2030px;
  width: 100%;
  margin: 0 auto;
}
`
