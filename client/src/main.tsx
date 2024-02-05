import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.tsx'
import Login from './Login.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
