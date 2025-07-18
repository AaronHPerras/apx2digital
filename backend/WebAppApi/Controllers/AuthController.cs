using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebAppApi.DTOs;
using WebAppApi.Services;

namespace WebAppApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    /// <summary>
    /// Authenticate user and return JWT tokens
    /// </summary>
    [HttpPost("login")]
    [ProducesResponseType(typeof(ApiResponse<AuthResponse>), 200)]
    [ProducesResponseType(typeof(ApiError), 400)]
    [ProducesResponseType(typeof(ApiError), 401)]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        try
        {
            var ipAddress = GetIpAddress();
            var result = await _authService.LoginAsync(request, ipAddress);
            
            var response = new ApiResponse<AuthResponse>
            {
                Data = result,
                Message = "Login successful",
                Success = true
            };

            return Ok(response);
        }
        catch (UnauthorizedAccessException ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 401
            };
            return Unauthorized(error);
        }
        catch (Exception ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 400
            };
            return BadRequest(error);
        }
    }

    /// <summary>
    /// Register a new user
    /// </summary>
    [HttpPost("register")]
    [ProducesResponseType(typeof(ApiResponse<AuthResponse>), 200)]
    [ProducesResponseType(typeof(ApiError), 400)]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        try
        {
            var ipAddress = GetIpAddress();
            var result = await _authService.RegisterAsync(request, ipAddress);
            
            var response = new ApiResponse<AuthResponse>
            {
                Data = result,
                Message = "Registration successful",
                Success = true
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 400
            };
            return BadRequest(error);
        }
    }

    /// <summary>
    /// Refresh access token using refresh token
    /// </summary>
    [HttpPost("refresh")]
    [ProducesResponseType(typeof(ApiResponse<AuthResponse>), 200)]
    [ProducesResponseType(typeof(ApiError), 401)]
    public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
    {
        try
        {
            var ipAddress = GetIpAddress();
            var result = await _authService.RefreshTokenAsync(request.RefreshToken, ipAddress);
            
            var response = new ApiResponse<AuthResponse>
            {
                Data = result,
                Message = "Token refreshed successfully",
                Success = true
            };

            return Ok(response);
        }
        catch (UnauthorizedAccessException ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 401
            };
            return Unauthorized(error);
        }
    }

    /// <summary>
    /// Revoke refresh token
    /// </summary>
    [HttpPost("revoke")]
    [Authorize]
    [ProducesResponseType(typeof(ApiResponse<bool>), 200)]
    public async Task<IActionResult> RevokeToken([FromBody] RefreshTokenRequest request)
    {
        var ipAddress = GetIpAddress();
        var result = await _authService.RevokeTokenAsync(request.RefreshToken, ipAddress);
        
        var response = new ApiResponse<bool>
        {
            Data = result,
            Message = result ? "Token revoked successfully" : "Token not found or already revoked",
            Success = true
        };

        return Ok(response);
    }

    /// <summary>
    /// Get current user information
    /// </summary>
    [HttpGet("me")]
    [Authorize]
    [ProducesResponseType(typeof(ApiResponse<UserResponse>), 200)]
    [ProducesResponseType(typeof(ApiError), 401)]
    [ProducesResponseType(typeof(ApiError), 404)]
    public async Task<IActionResult> GetCurrentUser()
    {
        try
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(new ApiError { Message = "Invalid token", StatusCode = 401 });
            }

            var result = await _authService.GetCurrentUserAsync(userId);
            
            var response = new ApiResponse<UserResponse>
            {
                Data = result,
                Success = true
            };

            return Ok(response);
        }
        catch (NotFoundException ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 404
            };
            return NotFound(error);
        }
    }

    /// <summary>
    /// Change user password
    /// </summary>
    [HttpPost("change-password")]
    [Authorize]
    [ProducesResponseType(typeof(ApiResponse<bool>), 200)]
    [ProducesResponseType(typeof(ApiError), 400)]
    [ProducesResponseType(typeof(ApiError), 401)]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        try
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(new ApiError { Message = "Invalid token", StatusCode = 401 });
            }

            var result = await _authService.ChangePasswordAsync(userId, request);
            
            var response = new ApiResponse<bool>
            {
                Data = result,
                Message = result ? "Password changed successfully" : "Failed to change password",
                Success = result
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 400
            };
            return BadRequest(error);
        }
    }

    /// <summary>
    /// Request password reset
    /// </summary>
    [HttpPost("request-password-reset")]
    [ProducesResponseType(typeof(ApiResponse<bool>), 200)]
    public async Task<IActionResult> RequestPasswordReset([FromBody] RequestPasswordResetRequest request)
    {
        var result = await _authService.RequestPasswordResetAsync(request.Email);
        
        var response = new ApiResponse<bool>
        {
            Data = result,
            Message = "If the email exists, a password reset link has been sent",
            Success = true
        };

        return Ok(response);
    }

    /// <summary>
    /// Reset password using reset token
    /// </summary>
    [HttpPost("reset-password")]
    [ProducesResponseType(typeof(ApiResponse<bool>), 200)]
    [ProducesResponseType(typeof(ApiError), 400)]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
    {
        try
        {
            var result = await _authService.ResetPasswordAsync(request);
            
            var response = new ApiResponse<bool>
            {
                Data = result,
                Message = "Password reset successfully",
                Success = true
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            var error = new ApiError
            {
                Message = ex.Message,
                StatusCode = 400
            };
            return BadRequest(error);
        }
    }

    /// <summary>
    /// Logout user (client-side token cleanup)
    /// </summary>
    [HttpPost("logout")]
    [Authorize]
    [ProducesResponseType(typeof(ApiResponse<bool>), 200)]
    public IActionResult Logout()
    {
        // In a JWT-based system, logout is typically handled client-side
        // by removing the tokens from storage. This endpoint exists for
        // consistency and future enhancement (e.g., token blacklisting)
        
        var response = new ApiResponse<bool>
        {
            Data = true,
            Message = "Logout successful",
            Success = true
        };

        return Ok(response);
    }

    private string GetIpAddress()
    {
        return Request.Headers.ContainsKey("X-Forwarded-For")
            ? Request.Headers["X-Forwarded-For"].ToString()
            : HttpContext.Connection.RemoteIpAddress?.ToString() ?? "Unknown";
    }
}
