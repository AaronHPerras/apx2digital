namespace WebAppApi.Tests;

public class BasicTests
{
    [Fact]
    public void SampleTest_Always_Passes()
    {
        // Arrange
        var expected = true;

        // Act
        var actual = true;

        // Assert
        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Math_Addition_Works()
    {
        // Arrange
        var a = 2;
        var b = 3;
        var expected = 5;

        // Act
        var actual = a + b;

        // Assert
        Assert.Equal(expected, actual);
    }
}