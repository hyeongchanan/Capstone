
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
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import My from './pages/My'
import Signup from './pages/Signup'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <GlobalStyle/>
      <MenuBar/>
      <Routes>
        <Route path="/static" element={<Main />} />
        <Route path="/static/Login" element={<Login/>} />
        <Route path="/static/my" element={
          <PrivateRoute>
            <My/>
          </PrivateRoute>} />
        <Route path="/static/LoginPage" element={<LoginPage/>} />
        <Route path="/static/Signup" element={<Signup/>} />
        <Route path="/static/SearchPage/:term" element={<SearchPage/>} />
        <Route path="/static/DetailPage/:id" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
