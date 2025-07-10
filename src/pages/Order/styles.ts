import styled from 'styled-components'
import { cores } from '../../styles'

export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s ease;
`
export const OrderSidebar = styled.aside`
  width: 360px;
  background-color: ${cores.salmon};
  position: relative;
  padding: 32px 8px 0px;
`
export const OrderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`

export const OrderTitle = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 16px;
  color: ${cores.Bege};
`

export const OrderText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${cores.Bege};
`

export const OrderButton = styled.button`
  width: 100%;
  heigth: 24px;
  padding: 4px;
  background-color: ${cores.Bege};
  border: none;
  border: 1px solid transparent;
  margin-top: 16px;
  color: ${cores.salmon};
  cursor: pointer;
`
