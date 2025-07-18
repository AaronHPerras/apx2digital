using System.ComponentModel.DataAnnotations;

namespace WebAppApi.DTOs;

public record LoginRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; init; } = string.Empty;
    
    [Required]
    [MinLength(6)]
    public string Password { get; init; } = string.Empty;
}

public record RegisterRequest
{
    [Required]
    [MinLength(2)]
    public string Name { get; init; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; init; } = string.Empty;
    
    [Required]
    [MinLength(6)]
    public string Password { get; init; } = string.Empty;
    
    [Required]
    [Compare(nameof(Password))]
    public string ConfirmPassword { get; init; } = string.Empty;
}

public record RefreshTokenRequest
{
    [Required]
    public string RefreshToken { get; init; } = string.Empty;
}

public record ChangePasswordRequest
{
    [Required]
    public string OldPassword { get; init; } = string.Empty;
    
    [Required]
    [MinLength(6)]
    public string NewPassword { get; init; } = string.Empty;
}

public record ResetPasswordRequest
{
    [Required]
    public string Token { get; init; } = string.Empty;
    
    [Required]
    [MinLength(6)]
    public string NewPassword { get; init; } = string.Empty;
}

public record RequestPasswordResetRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; init; } = string.Empty;
}
