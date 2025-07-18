import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { ProtectedRoute } from './components/common/ProtectedRoute'
import { LandingPage } from './components/LandingPage'
import { LoginForm } from './components/auth/LoginForm'
import { RegisterForm } from './components/auth/RegisterForm'
import { Dashboard } from './components/Dashboard'
import { useAuth } from './hooks/useAuth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import './App.css'

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <div className="min-vh-100 d-flex align-items-center bg-light">
              <LoginForm />
            </div>
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <div className="min-vh-100 d-flex align-items-center bg-light">
              <RegisterForm />
            </div>
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div className="min-vh-100 bg-light py-4">
              <Dashboard />
            </div>
          </ProtectedRoute>
        }
      />
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
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
