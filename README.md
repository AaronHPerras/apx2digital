# APX2Digital Web Application

A modern, production-ready web application for APX2Digital built with React frontend and .NET Web API backend.

## 🚀 Features

### Frontend (React + TypeScript)
- **React 18** with TypeScript and Vite for fast development
- **Bootstrap 5.2** for responsive UI components
- **React Router** for client-side routing
- **React Hook Form** for form validation and management
- **Axios** with request/response interceptors
- **JWT Authentication** with automatic token refresh
- **React Context API** for state management
- **Error Boundaries** for robust error handling
- **Code Splitting** and lazy loading for performance
- **ESLint + Prettier** for code quality
- **Vitest + React Testing Library** for testing
- **Environment Variable** support (.env files)

### Backend (.NET Web API)
- **.NET 8** Web API with C#
- **Entity Framework Core** with SQL Server
- **ASP.NET Identity** for user management
- **JWT Authentication** with refresh token support
- **Swagger/OpenAPI** documentation
- **Repository Pattern** with dependency injection
- **AutoMapper** for object mapping
- **xUnit** testing framework
- **Comprehensive Error Handling** middleware
- **CORS** configuration
- **Environment-based** configuration

## 📁 Project Structure

```
WebAppTemplate/
├── src/                          # Frontend React application
│   ├── components/               # React components
│   │   ├── auth/                # Authentication components
│   │   └── common/              # Common/shared components
│   ├── context/                 # React Context providers
│   ├── hooks/                   # Custom React hooks
│   ├── services/                # API service layer
│   ├── types/                   # TypeScript type definitions
│   └── test/                    # Test utilities and setup
├── backend/                     # Backend .NET Web API
│   ├── WebAppApi/              # Main API project
│   │   ├── Controllers/        # API controllers
│   │   ├── Data/               # Database context and seeding
│   │   ├── DTOs/               # Data Transfer Objects
│   │   ├── Models/             # Entity models
│   │   └── Services/           # Business logic services
│   └── WebAppApi.Tests/        # API unit tests
├── public/                      # Static assets
└── .github/                     # GitHub configuration
```

## 🛠️ Prerequisites

- **Node.js** 18+ and npm
- **.NET 8 SDK**
- **SQL Server** (LocalDB or full instance)
- **Visual Studio Code** (recommended) or Visual Studio

## ⚡ Quick Start

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd WebAppTemplate
```

### 2. Backend Setup
```bash
cd backend/WebAppApi

# Restore NuGet packages
dotnet restore

# Update database connection string in appsettings.Development.json
# Default uses LocalDB: Server=(localdb)\\mssqllocaldb;Database=WebAppDb;Trusted_Connection=true;

# Create and migrate database
dotnet ef database update

# Run the API (will start on https://localhost:7001)
dotnet run
```

### 3. Frontend Setup
```bash
# From project root (open new terminal)
npm install

# Start development server (will start on http://localhost:5173)
npm run dev
```

### 4. Open Application
- Frontend: http://localhost:5173
- Backend API: https://localhost:7001
- Swagger UI: https://localhost:7001/swagger

### 5. Quick Start Command (VS Code)
If using VS Code, you can use the built-in tasks:
- **Ctrl+Shift+P** → **Tasks: Run Task** → **Start Full Stack**

This will start both frontend and backend development servers simultaneously.

## 🔧 Configuration

### Environment Variables

#### Frontend (.env files)
```bash
# .env.development
VITE_API_URL=https://localhost:7001/api
VITE_APP_NAME=WebApp Template

# .env.production
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_NAME=WebApp Template
```

#### Backend (appsettings.json)
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=WebAppDb;Trusted_Connection=true;"
  },
  "JwtSettings": {
    "SecretKey": "your-super-secret-key-here-make-it-long-and-complex",
    "Issuer": "WebAppApi",
    "Audience": "WebAppClient",
    "ExpiryMinutes": 15,
    "RefreshTokenExpiryDays": 7
  }
}
```

## 🧪 Testing

### Frontend Tests
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Backend Tests
```bash
cd backend/WebAppApi.Tests

# Run tests
dotnet test

# Run tests with coverage
dotnet test --collect:"XPlat Code Coverage"
```

## 🚀 Deployment

### Frontend (Static Hosting)
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy the 'dist' folder to your static hosting provider
```

### Backend (Azure/IIS/Docker)
```bash
cd backend/WebAppApi

# Publish for deployment
dotnet publish -c Release -o ./publish

# The 'publish' folder contains your deployment artifacts
```

## 🔐 Authentication Flow

1. **Login**: User submits credentials
2. **JWT Token**: Server validates and returns access + refresh tokens
3. **Automatic Refresh**: Frontend intercepts 401 responses and refreshes tokens
4. **Logout**: Tokens are cleared from storage

### Protected Routes
```typescript
// Example of using authentication in components
import { useAuth } from '../hooks/useAuth';

const ProtectedComponent = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <div>Protected content for {user?.email}</div>;
};
```

## 📚 API Documentation

When running the backend, visit `/swagger` for interactive API documentation.

### Key Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration  
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - User logout

## 🎨 Customization

### Adding New Components
```bash
# Create component directory
mkdir src/components/your-component

# Add your component files
touch src/components/your-component/YourComponent.tsx
touch src/components/your-component/YourComponent.test.tsx
```

### Adding New API Endpoints
```csharp
// 1. Create a new controller in backend/WebAppApi/Controllers/
[ApiController]
[Route("api/[controller]")]
public class YourController : ControllerBase
{
    // Your endpoints here
}

// 2. Add service interfaces and implementations in Services/
// 3. Register services in Program.cs
// 4. Update frontend API client in src/services/
```

### Styling with Bootstrap
The template uses Bootstrap 5.2. You can:
- Use Bootstrap utility classes directly
- Create custom SCSS files in `src/styles/`
- Override Bootstrap variables for theming

## 🛡️ Security Features

- **JWT Tokens** with secure defaults
- **Password Hashing** using ASP.NET Identity
- **CORS** properly configured
- **SQL Injection** protection via Entity Framework
- **XSS Protection** via React's default escaping
- **Environment Variables** for sensitive configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts Reference

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Backend
- `dotnet run` - Start API server
- `dotnet build` - Build the solution
- `dotnet test` - Run tests
- `dotnet ef database update` - Apply database migrations
- `dotnet ef migrations add <name>` - Create new migration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Frontend won't start:**
- Ensure Node.js 18+ is installed
- Delete `node_modules` and run `npm install`
- Check for port conflicts on 5173

**Backend API errors:**
- Verify .NET 8 SDK is installed
- Check SQL Server connection string
- Ensure database migrations are applied

**Authentication issues:**
- Check JWT configuration in appsettings.json
- Verify API URL in frontend .env file
- Clear browser storage/cookies

### Getting Help
- Check the [Issues](../../issues) page
- Review the [Discussions](../../discussions) section
- Consult the inline code comments
    ...reactDom.configs.recommended.rules,
  },
})
```
