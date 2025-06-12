import styled from 'styled-components'
import { cores } from '../../styles'

export const Father = styled.div`
  position: relative;
`

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  height: 100%;
`

export const HeaderPerfil = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1024px;
    margin-top: 23px;
  }
`
export const Logo = styled.div`
  width: 127px;
  height: 58px;
`
export const RestPerfil = styled.p`
  width: 256px;
  height: 21px;
  font-size: 18px;
  color: ${cores.salmon};
  line-height: 100%;
  letter-spacing: 0%;
  horiontal-align: center;
  margin-top: 23px;
`

export const CartPefil = styled.a`
  width: 256px;
  height: 21px;
  margin-top: 23px;
  font-weight: 900;
  font-size: 18px;
  color: ${cores.salmon};
  cursor: pointer;
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  position: relative;

  span {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  div {
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    ::after {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
      content: '';
      position: absolute;
    }
  }
`
export const Paragrafo = styled.p`
  width: 100px;
  height: 32px;
  font-size: 32px;
  color: #ffffff;
  font-weight: italic;
  line-height: 100%;
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
  z-index: 1000;
  margin-top: 160px;
`
