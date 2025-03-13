import styled from 'styled-components'
import { cores } from '../../styles'

export const DivProduto = styled.div`
  width: 320px;
  height: 340px;
  background-color: ${cores.salmon};
`
export const ImgProdu = styled.img`
  width: 304px;
  height: 167px;
  margin-left: 8px;
  margin-top: 10px;
`
export const H3Produ = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-left: 8px;
  margin: 5px 8px 10px;
  color: ${cores.Bege};
`

export const ParagraPro = styled.p`
  width: 304px;
  heigth: 88px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  color: ${cores.Bege};
`

export const BotaoProdu = styled.button`
  width: 304px;
  height: 24px;
  margin-left: 8px;
  border: none;
  background-color: ${cores.Bege};
  color: ${cores.salmon};
`
