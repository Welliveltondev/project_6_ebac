import styled from 'styled-components'
import { cores } from '../../styles'

export const ListaCon = styled.div`
  display: grid;
  row-gap: 25px;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${cores.white};
`
