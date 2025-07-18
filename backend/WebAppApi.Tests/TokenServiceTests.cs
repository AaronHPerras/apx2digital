using WebAppApi.Services;
using WebAppApi.Models;
using Microsoft.Extensions.Configuration;

namespace WebAppApi.Tests;

public class TokenServiceTests
{
    private readonly TokenService _tokenService;
    private readonly IConfiguration _configuration;

    public TokenServiceTests()
    {
        // Setup configuration
        var configBuilder = new ConfigurationBuilder();
        configBuilder.AddInMemoryCollection(new Dictionary<string, string?>
        {
            ["JwtSettings:SecretKey"] = "this-is-a-very-long-secret-key-for-testing-purposes-that-meets-minimum-requirements",
            ["JwtSettings:Issuer"] = "TestIssuer",
            ["JwtSettings:Audience"] = "TestAudience",
            ["JwtSettings:ExpiryMinutes"] = "15"
        });
        _configuration = configBuilder.Build();
        
        _tokenService = new TokenService(_configuration);
    }

    [Fact]
    public void GenerateAccessToken_WithValidUser_ReturnsToken()
    {
        // Arrange
        var user = new ApplicationUser
        {
            Id = "test-user-id",
            Email = "test@example.com",
            UserName = "test@example.com"
        };
        var roles = new List<string> { "User" };

        // Act
        var token = _tokenService.GenerateAccessToken(user, roles);

        // Assert
        Assert.NotNull(token);
        Assert.NotEmpty(token);
        Assert.Contains(".", token); // JWT tokens contain dots
    }

    [Fact]
    public void GenerateRefreshToken_ReturnsNonEmptyString()
    {
        // Act
        var refreshToken = _tokenService.GenerateRefreshToken();

        // Assert
        Assert.NotNull(refreshToken);
        Assert.NotEmpty(refreshToken);
        Assert.True(refreshToken.Length > 20); // Should be a reasonably long string
    }
}
