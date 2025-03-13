import hero from '../../assets/image/Vector.png'
import logo from '../../assets/image/logo.png'
import text from '../../assets/image/Vector.png'

import { DivLogo, Hero, Img, TextDesc } from './styles'

const Header = () => (
  <Hero style={{ backgroundImage: `url(${hero})` }}>
    <DivLogo>
      <h1>
        {' '}
        <Img src={logo} alt="" />
      </h1>
      <TextDesc>
        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </TextDesc>
    </DivLogo>
  </Hero>
)

export default Header
