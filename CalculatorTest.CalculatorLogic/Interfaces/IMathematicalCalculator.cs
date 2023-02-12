using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorTest.Logic.Interfaces
{
    public interface IMathematicalCalculator : ICalculator
    {
        /// <summary>
        /// Return the square root of a specified decimal value
        /// </summary>
        /// <param name="amount">The value to square root</param>
        /// <returns></returns>
        decimal SquareRoot(decimal amount);
    }
}
