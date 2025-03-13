import styled from 'styled-components'
import { cores } from '../../styles'

export const Hero = styled.div`
  margin-bottom: 80px;
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Img = styled.img`
  width: 150px;
  heigth: 58px;
  margin-top: 100px;
`
export const DivLogo = styled.div`
  align-items: center;

  h1 {
    text-align: center;
  }
`
export const TextDesc = styled.div`
  margin: auto;
  width: 800px;
  height: 84px;

  h2 {
    margin-top: 60px;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 100%;
    text-align: center;
    color: ${cores.salmon};
  }
`
