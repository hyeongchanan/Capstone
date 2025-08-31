
import './App.css'
import MenuBar from './components/MenuBar'
import Main from './pages/Main'
import { EmptyBox } from './style/common.styled'
import GlobalStyle from './style/GlobalStyle'

function App() {

  return (
    <>
      <GlobalStyle/>
      <MenuBar/>
      <EmptyBox/>
      <Main></Main>
      
    </>
  )
}

export default App
