using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorTest.Logic.Interfaces
{
    public interface ICalculator
    {
        /// <summary>
        /// Method to produce the sum of two integers.
        /// </summary>
        /// <param name="start">The first integer</param>
        /// <param name="amount">The second integer to add to 'start'</param>
        /// <returns></returns>
        int Add(int start, int amount);
        /// <summary>
        /// Method to subtract a given integer from another.
        /// </summary>
        /// <param name="start">The first integer</param>
        /// <param name="amount">The integer amount to subtract from 'start'</param>
        /// <returns></returns>
        int Subtract(int start, int amount);
    }
}
