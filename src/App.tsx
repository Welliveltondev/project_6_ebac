import { Provider } from 'react-redux'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Rotas />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
