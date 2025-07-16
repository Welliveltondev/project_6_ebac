import React from 'react'
import { Overlay } from '../../components/Cart/styles'

import {
  PaymentContainer,
  OverlayPayment,
  PaymentButton,
  PaymentInputGroup,
  PaymentLabel,
  PaymentSidebar,
  PaymentTitle,
  PayNumber,
  CVVcog,
  Expires
} from './styles'
import { useDispatch } from 'react-redux'
import { close } from '../../store/reducer/cart'
import { RootReducer } from '../../store'

const Payment = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <PaymentContainer>
      <OverlayPayment onClick={closeCart} />

      <PaymentSidebar>
        <PaymentTitle>Pagamento - Valor a pagar R$ 190,90</PaymentTitle>
        <PaymentInputGroup>
          <PaymentLabel htmlFor="nome-cartao">Nome no cartão</PaymentLabel>
          <input type="text" id="nome-cartao" />
        </PaymentInputGroup>

        <PayNumber className="payment-flex">
          <PaymentInputGroup>
            <PaymentLabel htmlFor="num-cartao">Número do cartão</PaymentLabel>
            <input type="text" id="num-cartao" />
          </PaymentInputGroup>

          <CVVcog>
            <PaymentLabel className="cvv" htmlFor="cvv">
              CVV
            </PaymentLabel>
            <input type="text" id="cvv" />
          </CVVcog>
        </PayNumber>

        <PayNumber className="payment-flex">
          <Expires>
            <PaymentLabel htmlFor="month-expires">
              Mês de vencimento
            </PaymentLabel>
            <input type="text" id="month-expires" />
          </Expires>
          <Expires>
            <PaymentLabel htmlFor="year-expires">
              Ano de vencimento
            </PaymentLabel>
            <input type="text" id="year-expires" />
          </Expires>
        </PayNumber>

        <PaymentButton>
          <button type="button">Finalizar pagamento</button>
          <button type="button">Voltar para edição de endereço</button>
        </PaymentButton>
      </PaymentSidebar>
    </PaymentContainer>
  )
}

export default Payment
