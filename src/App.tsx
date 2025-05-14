import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
