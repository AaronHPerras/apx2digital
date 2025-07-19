import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { LandingPage } from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import './App.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={
        <div className="container mt-5">
          <div className="text-center">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/" className="btn btn-primary">Go to Home</a>
          </div>
        </div>
      } />
    </Routes>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  )
}

export default App
