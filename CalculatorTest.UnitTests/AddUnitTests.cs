using CalculatorTest.Logic.Enums;
using CalculatorTest.Logic.Factories;
using CalculatorTest.Logic.Interfaces;
using Xunit;

namespace CalculatorTest.UnitTests
{
    public class AddUnitTests : SimpleCalculatorUnitTests
    {        
        [Theory]
        [InlineData(1, 2, 3)]
        [InlineData(-4, -6, -10)]
        [InlineData(-2, 2, 0)]
        [InlineData(5, -2, 3)]
        [InlineData(0, -0, 0)]
        [InlineData(10, -0, 10)]
        [InlineData(-0, -5, -5)]
        public void CanAdd(int start, int amount, int expected)
        {
            int result = _simpleCalculator.Add(start, amount);
            Assert.Equal(expected, result);
        }        
        [Fact]
        public void TestAddMaxValue()
        {
            Assert.ThrowsAny<OverflowException>(() => _simpleCalculator.Add(int.MaxValue, 1));
        }
        [Fact]
        public void TestAddMinValue()
        {
            Assert.Throws<OverflowException>(() => _simpleCalculator.Add(int.MinValue, -1));
        }
    }
}