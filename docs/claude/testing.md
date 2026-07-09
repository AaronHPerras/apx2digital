# Testing Reference — APx2Digital

## Stack
- **Runner**: Vitest 3 (configured in `vite.config.ts` under `test:`)
- **Environment**: jsdom
- **Assertions**: `@testing-library/jest-dom` (imported in `src/test/setup.ts`)
- **User interactions**: `@testing-library/user-event`
- **Globals**: enabled (`describe`, `it`, `expect`, `vi` available without import)

## Test Setup (`src/test/setup.ts`)
The setup file runs before every test file and mocks browser APIs:
```ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'

globalThis.fetch = vi.fn()

// localStorage mock
Object.defineProperty(window, 'localStorage', { value: { getItem: vi.fn(), setItem: vi.fn(), ... } })
// sessionStorage mock — same pattern
```
Always `vi.clearAllMocks()` in `beforeEach` when mocking services.

## Standard Wrapper Pattern
Components that use `AuthContext` or `BrowserRouter` need a wrapper:
```tsx
const MockWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <AuthProvider>
      {children}
    </AuthProvider>
  </BrowserRouter>
)

render(<MockWrapper><ComponentUnderTest /></MockWrapper>)
```

## Mocking Services
```ts
vi.mock('../../services/authService', () => ({
  authService: {
    login: vi.fn(),
    isAuthenticated: vi.fn(),
    getStoredUser: vi.fn(),
  },
}))
```
Place `vi.mock(...)` calls at the top of the test file, outside `describe`.

## Form Testing Pattern (React Hook Form)
Use `fireEvent.change` to set input values, then `fireEvent.click` the submit button.
```tsx
fireEvent.change(screen.getByLabelText(/email address/i), {
  target: { value: 'test@example.com' }
})
fireEvent.click(screen.getByRole('button', { name: /sign in/i }))

// Validation errors appear async — always use waitFor
await waitFor(() => {
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
})
```

## What to Test
| Target | Tests needed |
|--------|-------------|
| `common/` components | Render smoke test + props contract |
| Form components | Valid submit path, each required-field error, format error (email, phone) |
| AuthContext | Login sets user, logout clears tokens, unauthenticated redirects |
| Utility functions | Pure unit tests, no DOM needed |
| Section components | Skip unless they contain business logic |

## Test File Location
Co-locate test files with the component: `ComponentName.test.tsx` next to `ComponentName.tsx`.

## Running Tests
```bash
npm test               # watch mode (default)
npm test -- --run      # single run (CI)
npm test -- --coverage # with coverage report
```

## Coverage Targets (aspirational, not yet enforced)
- Branches: 70%
- Functions: 80%
- Lines: 80%
