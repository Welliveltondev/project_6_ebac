import { Provider } from 'react-redux'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Rotas />
        </div>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
