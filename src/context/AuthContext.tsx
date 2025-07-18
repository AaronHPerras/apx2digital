import { createContext, useReducer, useEffect, type ReactNode } from 'react'
import type { AuthState, AuthAction } from '../types/state'
import type { ApiError } from '../types/api'
import { authService } from '../services/authService'

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, isLoading: true, error: null }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      }
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      }
    case 'AUTH_CLEAR_ERROR':
      return { ...state, error: null }
    default:
      return state
  }
}

interface AuthContextType {
  state: AuthState
  login: (email: string, password: string) => Promise<void>
  register: (userData: { email: string, password: string, firstName: string, lastName: string }) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
  getCurrentUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export { AuthContext }

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Check for existing session on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const user = authService.getStoredUser()
          if (user) {
            dispatch({ type: 'AUTH_SUCCESS', payload: user })
          } else {
            // Token exists but no user data, fetch from server
            await getCurrentUser()
          }
        } else {
          dispatch({ type: 'AUTH_FAILURE', payload: '' })
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        dispatch({ type: 'AUTH_FAILURE', payload: 'Failed to initialize authentication' })
      }
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'AUTH_START' })
      const authResponse = await authService.login({ email, password })
      dispatch({ type: 'AUTH_SUCCESS', payload: authResponse.user })
    } catch (error) {
      const apiError = error as ApiError
      dispatch({ type: 'AUTH_FAILURE', payload: apiError.message || 'Login failed' })
      throw error
    }
  }
  const register = async (userData: { email: string, password: string, firstName: string, lastName: string }) => {
    try {
      dispatch({ type: 'AUTH_START' })
      const authResponse = await authService.register(userData)
      dispatch({ type: 'AUTH_SUCCESS', payload: authResponse.user })
    } catch (error) {
      const apiError = error as ApiError
      dispatch({ type: 'AUTH_FAILURE', payload: apiError.message || 'Registration failed' })
      throw error
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      dispatch({ type: 'AUTH_LOGOUT' })
    }
  }

  const getCurrentUser = async () => {
    try {
      dispatch({ type: 'AUTH_START' })
      const user = await authService.getCurrentUser()
      dispatch({ type: 'AUTH_SUCCESS', payload: user })
    } catch (error) {
      const apiError = error as ApiError
      dispatch({ type: 'AUTH_FAILURE', payload: apiError.message || 'Failed to get user' })
      throw error
    }
  }

  const clearError = () => {
    dispatch({ type: 'AUTH_CLEAR_ERROR' })
  }

  const value: AuthContextType = {
    state,
    login,
    register,
    logout,
    clearError,
    getCurrentUser,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
