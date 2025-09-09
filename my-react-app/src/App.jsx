
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Main from './pages/Main'
import { EmptyBox } from './style/common.styled'
import GlobalStyle from './style/GlobalStyle'
import Login from './pages/Login'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MenuBar/>
      <Routes>
        <Route path="/static" element={<Main />} />
        <Route path="/static/Login" element={<Login/>} />
        <Route path="/static/LoginPage" element={<LoginPage/>} />
        <Route path="/static/SearchPage" element={<SearchPage/>} />
        <Route path="/static/DetailPage/:id" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
