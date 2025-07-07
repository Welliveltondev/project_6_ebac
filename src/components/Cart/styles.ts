import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  transition: all 0.5s ease;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  width: 360px;
  background-color: ${cores.salmon};
  position: relative;
`
export const LiProduto = styled.li`
  background-color: ${cores.Bege};
  max-width: 344px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 16px 8px;
  color: ${cores.salmon};
  list-styles: none;
`
export const ImgCart = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-top: 8px;
  margin-left: 8px;
`

export const ConatinerTextCart = styled.div`
  margin-left: -80px;
`
export const Titlecart = styled.h3`
  width: 140px;
  height: 21px;
  font-size: 18px;
  font-weght: 900;
  margin-top: 8px;
`
export const PrecoCart = styled.p`
  width: 67px;
  height: 22px;
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
`
export const Lixeira = styled.span`
  width: 16px;
  height: 16px;
  position: relative;
  right: 8px;
  top: 76px;
  cursor: pointer;
`
export const Totalcart = styled.div`
  max-width: 344px;
  width: 100%;
  height: 16px;
  color: #ffebd9;
  margin-left: 8px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
`

export const ButonCart = styled.button`
  border: none;
  width: 344px;
  background-color: ${cores.Bege};
  color: ${cores.salmon};
  margin-left: 8px;
  margin-top: 16px;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid ${cores.Bege};
    color: ${cores.Bege};
    border-radius: 4px;
  }
`
