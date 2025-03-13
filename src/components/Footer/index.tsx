import FooterLogo from '../../assets/image/logo.png'
import instagram from '../../assets/image/instagram.png'
import faceBook from '../../assets/image/face-book.png'
import twiter from '../../assets/image/twiter.png'
import { Conteudo, FooterConta, ImgFooter, SicialMedia } from './styles'

const Footer = () => (
  <FooterConta>
    <Conteudo>
      <ImgFooter src={FooterLogo} alt="" />
      <SicialMedia>
        <img src={instagram} alt="logo do instagram" />
        <img src={faceBook} alt="logo do facebook" />
        <img src={twiter} alt=" logo do twiter" />
      </SicialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </Conteudo>
  </FooterConta>
)

export default Footer
