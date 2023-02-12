using CalculatorTest.Logic.Interfaces;
using Xunit;
namespace CalculatorTest.UnitTests
{
    public class SubtractUnitTests : SimpleCalculatorUnitTests
    {

        [Theory]
        [InlineData(1, 2, -1)]
        [InlineData(-4, -6, 2)]
        [InlineData(-2, 2, -4)]
        [InlineData(5, -2, 7)]
        [InlineData(0, -0, 0)]
        [InlineData(10, -0, 10)]
        [InlineData(-0, -5, 5)]
        public void CanSubtract(int start, int amount, int expected)
        {
            int result = _simpleCalculator.Subtract(start, amount);
            Assert.Equal(expected, result);
        }
        [Fact]
        public void TestSubtractMaxValue()
        {
            Assert.Throws<OverflowException>(() => _simpleCalculator.Subtract(int.MaxValue, -1));
        }
        [Fact]
        public void TestSubtractMinValue()
        {
            Assert.Throws<OverflowException>(() => _simpleCalculator.Subtract(int.MinValue, 1));
        }
    }
}
