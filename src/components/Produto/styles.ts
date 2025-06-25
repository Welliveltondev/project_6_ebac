import styled from 'styled-components'
import { cores } from '../../styles'

export const DivProduto = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmon};
  margin: 10px;
  box-shadow: 2px 10px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 5px 20px 10px rgba(0, 0, 0, 0.25);
    transform: translateY(-5px);
  }
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
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`
export const ModalCon = styled.div`
  position: relative;
  display: flex;

  &.visivel{
    display: none;
    transition: all .5s ease;
  }

  &.overlay {
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    content: '';
  }
}
`

export const Conteudo = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: ${cores.salmon};
  width: 1024px;
  height: 344px;
  position: fixed;
  top: 123px;
  left: 48vh;
  transition: all 0.3s ease;

  span {
    display: flex;
    justify-content: space-between;

    img {
      width: 18px;
      height: 18px;
      margin: 8px;
      cursor: pointer;
    }
  }
`

export const ImgModal = styled.img`
  width: 280px;
  height: 280px;
  margin: 32px;
`
export const Title = styled.h3`
  width: 140px;
  height: 21px;
  margin: 32px 0 0;
  font-weight: 900;
  font-size: 18px;
  color: #ffffff;
  line-height: 100%;
  font-family: Roboto;
`

export const Description = styled.p`
  width: 656px;
  height: 176px;
  margin: 16px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.white};
`

export const Botao_Modal = styled.button`
  width: 218px;
  height: 24px;
  color: ${cores.salmon};
  border: none;
  background-color: ${cores.Bege};
`
export const SaibaMais = styled.a`
  width: 204px;
  height: 16px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`
