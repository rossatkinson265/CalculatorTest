using CalculatorTest.Logic.Concrete;
using CalculatorTest.Logic.Enums;
using CalculatorTest.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorTest.Logic.Factories
{
    public class CalculatorFactory
    {
        public ICalculator CreateCalculator(CalculatorType calcType)
        {
            switch(calcType) 
            {
                case CalculatorType.Simple:
                    return new DefaultSimpleCalculator();
                default:
                    return new DefaultSimpleCalculator();
            }
        }
    }
}
