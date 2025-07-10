import React from 'react'
import {
  Cardbutton,
  CardContainer,
  CardOverlay,
  CardSidebar,
  CardTitle,
  CepNum,
  InputGroup,
  InputLabel,
  Nums
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <CardOverlay />
      <CardSidebar>
        <CardTitle>Entrega</CardTitle>
        <InputGroup>
          <InputLabel htmlFor="nome">Quem irá receber</InputLabel>
          <input type="text" id="nome" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="endereco">Endereço</InputLabel>
          <input type="text" id="endereco" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="cidade">Cidade</InputLabel>
          <input type="text" id="cidade" />
        </InputGroup>
        <Nums>
          <CepNum>
            <InputGroup>
              <InputLabel htmlFor="cep">CEP</InputLabel>
              <input type="text" id="cep" />
            </InputGroup>
          </CepNum>
          <CepNum>
            <InputGroup>
              <InputLabel htmlFor="numero">Número</InputLabel>
              <input type="text" id="numero" />
            </InputGroup>
          </CepNum>
        </Nums>
        <InputGroup>
          <InputLabel htmlFor="complemento">Complemento(opicional)</InputLabel>
          <input type="text" id="complemento" />
        </InputGroup>
        <Cardbutton>
          <button type="button">Continuar com o pagamento</button>
          <button type="button">Voltar para o carrinho</button>
        </Cardbutton>
      </CardSidebar>
    </CardContainer>
  )
}

export default Card
