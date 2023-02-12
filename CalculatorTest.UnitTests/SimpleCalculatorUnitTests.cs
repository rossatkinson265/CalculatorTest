using CalculatorTest.Logic.Enums;
using CalculatorTest.Logic.Factories;
using CalculatorTest.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorTest.UnitTests
{
    public abstract class SimpleCalculatorUnitTests
    {
        protected ICalculator _simpleCalculator;
        public SimpleCalculatorUnitTests()
        {
            CalculatorFactory calculatorFactory = new CalculatorFactory();
            _simpleCalculator = calculatorFactory.CreateCalculator(CalculatorType.Simple);
        }
    }
}
