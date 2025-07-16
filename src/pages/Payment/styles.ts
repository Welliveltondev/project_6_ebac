import styled from 'styled-components'
import { cores } from '../../styles'

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s ease;
`

export const PaymentSidebar = styled.aside`
  width: 360px;
  background-color: ${cores.salmon};
  position: relative;
  padding: 32px 8px 0px;
`

export const OverlayPayment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  z-index: -11;
`

export const PaymentTitle = styled.p`
  width: 270px;
  height: 20px;
  font-weight: 700;
  font-size: 16px;
  color: ${cores.Bege};
`

export const PaymentInputGroup = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  display: block;

  input {
    width: 100%;
    height: 32px;
    margin-top: 8px;
    background-color: ${cores.Bege};
    border: none;
    border: 1px solid transparent;
  }
`

export const PaymentLabel = styled.label`
  height: 16px;
  font-weight: 700;
  font-size: 14px;
  color: ${cores.Bege};
  margin-bottom: 8px;
`

export const PayNumber = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CVVcog = styled.div`
  max-width: 87px;
  height: 32px;
  margin-top: 8px;
  padding-right: 8px;
  margin-left: 30px;

  input {
    width: 87px;
    border: flex;
    height: 32px;
    background-color: ${cores.Bege};
    border: 1px solid transparent;
  }
`

export const Expires = styled.div`
  width: 100%;
  max-width: 155px;

  input {
    width: 100%;
    height: 32px;
    background-color: ${cores.Bege};
    border: none;
    margin-top: 8px;
  }
`

export const PaymentButton = styled.button`
  width: 100%;
  background-color: ${cores.salmon};
  border: none;
  margin-top: 24px;

  button {
    width: 100%;
    height: 24px;
    background-color: ${cores.Bege}
    border: none;
    font-weight: 700;
    color: ${cores.salmon};
    margin-bottom: 8px;
    border: none;
    cursor: pointer;
`
