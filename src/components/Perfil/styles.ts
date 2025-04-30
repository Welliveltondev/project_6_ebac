import styled from 'styled-components'
import Produto from '../Porduto'

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
`

export const HeaderPerfil = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
  }
`
export const Logo = styled.div`
  width: 125px;
  height: 57px;
`
export const RestPerfil = styled.span`
  width: 110px;
  height: 20px;
  font-size: 18px;
  color: #e66767;
`

export const CartPefil = styled.span`
  width: 256px;
  height: 20px;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  position: relative;

  div {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const Paragrafo = styled.p`
  width: 100px;
  height: 32px;
  font-size: 32px;
  color: #ffffff;
  font-weight: italic;
  line-height: 100%;
  z-index: 1;
  margin-top: 20px;
`

export const Paragrafo2 = styled.p`
  width: 670px;
  height: 32px;
  color: #ffffff;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  z-index: 100;
  margin-top: 160px;
`
export const ListaProdutos = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
