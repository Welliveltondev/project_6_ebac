import Footer from './components/Footer'
import Home from './components/Home'
import { GlobalStyle } from './styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
        <Footer />
      </>
    )
  }
])
function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <RouterProvider router={rotas} />
      </>
    </div>
  )
}

export default App
