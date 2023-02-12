using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorTest.Logic.Interfaces
{
    public interface IComplexCalculator : ICalculator
    {
        /// <summary>
        /// Return the product of two decimal values.
        /// </summary>
        /// <param name="start">Starting decimal amount</param>
        /// <param name="multiplier">The amount by which to multiply 'start'</param>
        /// <returns></returns>
        decimal Multiply(decimal start, decimal multiplier);
        /// <summary>
        /// Return start divided by the provided denominator.
        /// </summary>
        /// <param name="start">Starting decimal amount</param>
        /// <param name="denominator">The amount by which to divide 'start'</param>
        /// <returns></returns>
        decimal Divide(decimal start, decimal denominator);
    }
}
