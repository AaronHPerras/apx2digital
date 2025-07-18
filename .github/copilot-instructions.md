# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a full-stack web application starter template with:

- **Frontend**: React 18 + Vite + TypeScript + Bootstrap 5.2
- **Backend**: .NET 8 Web API + Entity Framework Core + SQL Server
- **Authentication**: JWT-based authentication with refresh token support
- **State Management**: React Context API
- **API Communication**: Axios with interceptors for token management
- **Testing**: Jest + React Testing Library (frontend), xUnit (backend)
- **Code Quality**: ESLint + Prettier + TypeScript strict mode

## Architecture Guidelines

### Frontend (React + TypeScript)
- Use functional components with hooks
- Implement proper TypeScript types for all props and state
- Use React Hook Form for form validation
- Follow Bootstrap utility classes and custom SCSS for styling
- Implement error boundaries for robust error handling
- Use lazy loading and code splitting for performance
- Generate API clients from OpenAPI specs

### Backend (.NET Web API)
- Follow repository pattern with dependency injection
- Use Entity Framework Core with migrations
- Implement comprehensive JWT authentication with refresh tokens
- Design authentication interfaces for future OAuth integration
- Use proper async/await patterns
- Implement comprehensive error handling middleware
- Follow REST API conventions
- Use AutoMapper for object mapping
- Implement comprehensive logging

### Security Best Practices
- Store secrets in appsettings (dev) or environment variables (production)
- Use secure JWT token generation and validation
- Implement proper CORS configuration
- Use parameterized queries to prevent SQL injection
- Implement proper password hashing with Identity framework
- Use HTTPS in production

### Testing Standards
- Write unit tests for all business logic
- Use meaningful test names and arrange-act-assert pattern
- Mock external dependencies
- Aim for good test coverage
- Write integration tests for API endpoints

### Code Organization
- Keep components small and focused
- Use proper folder structure (components, hooks, services, types)
- Implement proper error handling at all levels
- Use meaningful variable and function names
- Add comprehensive comments for complex logic
