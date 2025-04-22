import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterConta = styled.div`
  margin: 80px 0 auto;
  height: 300px;
  width: 100%;
  background-color: ${cores.Bege};
  color: ${cores.salmon};
  p {
    margin: 50px 0 10px;
    text-align: center;
  }
  margin-bottom: 50px; //remover //
`
export const Conteudo = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`
export const ImgFooter = styled.img`
  margin: 0 auto;
  margin-top: 50px;
  width: 150px;
`
export const SicialMedia = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
`
