import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import './index.css'

const LandingPage = lazy(() =>
  import('./components/LandingPage').then((m) => ({ default: m.LandingPage }))
)

function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-vh-100" />}>
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
    </Suspense>
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
