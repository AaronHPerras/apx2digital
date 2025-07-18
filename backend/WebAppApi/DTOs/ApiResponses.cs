namespace WebAppApi.DTOs;

public record UserResponse
{
    public string Id { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public IEnumerable<string> Roles { get; init; } = Array.Empty<string>();
    public DateTime CreatedAt { get; init; }
}

public record AuthResponse
{
    public UserResponse User { get; init; } = null!;
    public string AccessToken { get; init; } = string.Empty;
    public string RefreshToken { get; init; } = string.Empty;
    public int ExpiresIn { get; init; }
}

public record ApiResponse<T>
{
    public T Data { get; init; } = default!;
    public string? Message { get; init; }
    public bool Success { get; init; } = true;
}

public record ApiError
{
    public string Message { get; init; } = string.Empty;
    public Dictionary<string, string[]>? Errors { get; init; }
    public int StatusCode { get; init; }
}

public record PaginatedResponse<T>
{
    public IEnumerable<T> Data { get; init; } = Array.Empty<T>();
    public int TotalCount { get; init; }
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
    public int TotalPages { get; init; }
    public bool HasNextPage { get; init; }
    public bool HasPreviousPage { get; init; }
}
