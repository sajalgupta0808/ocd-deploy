
import './App.css'
import { HomePage, AboutPage} from './pages'
import Toolbar from './pages/Toolbar'
import { Layout } from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>ß
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/toolbar/:id" element={<Toolbar />} /> {/* 🔹 New route */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

