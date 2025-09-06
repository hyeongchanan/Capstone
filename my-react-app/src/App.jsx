
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Main from './pages/Main'
import { EmptyBox } from './style/common.styled'
import GlobalStyle from './style/GlobalStyle'
import Login from './pages/Login'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MenuBar/>
      <EmptyBox/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
