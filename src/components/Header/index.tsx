import hero from '../../assets/image/Hero (1).png'
import { Hero, HeroImg } from './styles'

const Header = () => (
  <Hero>
    <HeroImg src={hero} alt="" />
  </Hero>
)
export default Header
