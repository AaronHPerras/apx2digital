import { useCallback } from 'react'

/**
 * Custom hook for smooth scrolling to top of page
 * Handles sticky navigation and provides consistent scroll behavior
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback((options?: { smooth?: boolean; offset?: number }) => {
    const { smooth = true, offset = 0 } = options || {}
    
    // Use requestAnimationFrame to ensure DOM updates are complete
    requestAnimationFrame(() => {
      window.scrollTo({
        top: offset,
        behavior: smooth ? 'smooth' : 'auto'
      })
    })
  }, [])

  return { scrollToTop }
}
