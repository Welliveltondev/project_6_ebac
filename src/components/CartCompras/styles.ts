import styled from 'styled-components'
import { cores } from '../../styles'

export const CartCo = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`

export const DivMaior = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: ${cores.salmon};

  p {
    margin-top: 70px;
  }

  img {
    margin-top: 40px;
  }
`
export const Macarrao = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  color: #ffffff;
  margin-bottom: 50px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`
export const Pcon = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  height: 260px;
`
export const P1 = styled.p`
  font-weight: 100;
  font-size: 32px;
`
export const P2 = styled.p`
  font-weight: 900;
  font-size: 32px;
  color: ${cores.white};
  margin-top: 160px;
  z-index: 100;
`

export const LinkCart = styled.a`
  margin-top: 70px;
  cursor: pointer;
  text-decoration: none;
  color: ${cores.salmon};
`
