import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return {
    // State properties
    user: context.state.user,
    isAuthenticated: context.state.isAuthenticated,
    isLoading: context.state.isLoading,
    error: context.state.error,
    
    // Methods
    login: context.login,
    registerUser: context.register,
    logout: context.logout,
    clearError: context.clearError,
    getCurrentUser: context.getCurrentUser,
  }
}
