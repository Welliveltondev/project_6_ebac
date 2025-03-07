import { styled } from 'styled-components'
import { cores } from '../../styles'

export const RestContainer = styled.div`
  max-width: 470px;
  width: 100%;
  height: 390px;
  border: 1px solid ${cores.salmon};
  position: relative;

  img {
    width: 100%;
  }
`
export const Descricao = styled.div`
  width: 456px;
  height: 88px;
  margin-left: 8px;
`
export const DesText = styled.p`
  font-family: Roboto sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.salmon};
`
export const NotaCont = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 8px;
  }

  img {
    width: 20px;
  }

  h3 {
    font-family: Roboto sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: ${cores.salmon};
  }
`

export const Avaliacao = styled.img`
  margin-left: 8px;
  margin-top: -5px;
`
export const ImgRest = styled.div`
  width: 472px;
  height: 218px;
`
export const DesCat = styled.div`
  top: 8px;
  right: 8px;
  position: absolute;
`
export const Destaque = styled.span`
  width: 120px;
  height: 30px;
  font-weight: bold;
  font-size: 12px;
  color: ${cores.Bege};
  background-color: ${cores.salmon};
`
export const Categoria = styled.span`
  width: 54px;
  height: 14px;
  margin-left: 8px;
  font-weight: bold;
  font-size: 12px;
  color: ${cores.Bege};
  background-color: ${cores.salmon};
`

export const Botao = styled.button`
  cursor: pointer;
  width: 100%;
  max-width: 82px;
  height: 24px;
  font-weight: 700;
  font-size: 14px;
  align-items: center;
  background-color: ${cores.salmon};
  color: ${cores.Bege};
  border: none;
  margin: 8px 8px;
`
