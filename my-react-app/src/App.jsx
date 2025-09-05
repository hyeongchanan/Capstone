
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Main from './pages/Main'
import { EmptyBox } from './style/common.styled'
import GlobalStyle from './style/GlobalStyle'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MenuBar/>
      <EmptyBox/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
