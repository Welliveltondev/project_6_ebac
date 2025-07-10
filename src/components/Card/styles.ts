import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s ease;
`

export const CardTitle = styled.h2`
  width: 56px;
  height: 20px;
  font-weight: 700;
  font-size: 16px;
  color: ${cores.Bege};
  margin-bottom: 16px;
`

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`

export const CardSidebar = styled.aside`
  width: 360px;
  background-color: ${cores.salmon};
  position: relative;
  padding: 32px 8px 0px;
`
export const InputGroup = styled.div`
  margin-bottom: 16px;
  input {
    width: 100%;
    height: 32px;
    background-color: ${cores.Bege};
    border: none;
    border: 1px solid transparent;
    margin-top: 8px;
    padding: 0 8px;
  }
`
export const InputLabel = styled.label`
  width: 110px;
  height: 16px;
  font-weight: 700;
  font-size: 14px;
  color: ${cores.Bege};
`
export const Nums = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const CepNum = styled.div`
  width: 155px;
  height: 56px;
`
export const Cardbutton = styled.button`
  diplay: block;
  width: 100%;
  background-color: ${cores.salmon};
  border: none;
  button {
    width: 100%;
    height: 24px;
    background-color: ${cores.Bege};
    color: ${cores.salmon};
    border: none;
    margin-bottom: 16px;
    cursor: pointer;
  }
`
