using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CalculatorTest.Logic.Interfaces;

namespace CalculatorTest.Logic.Abstract
{
    /// <summary>
    /// Implementation of shared code for calculator interfaces.
    /// All calculator types will implement add and subtract, so the shared implementation will be added to this class.
    /// This implementation can be overriden in derived classes.
    /// </summary>
    public abstract class AbstractCalcualtor : ICalculator
    {
        public virtual int Add(int start, int amount)
        {
            long convertedValue = (long)start + (long)amount;
            if (this.CheckIntegerOverflow(convertedValue))
            {
                throw new OverflowException();
            }
            //Increase start by amount
            return start += amount;
        }
        public virtual int Subtract(int start, int amount)
        {
            long convertedValue = (long)start - (long)amount;
            if (this.CheckIntegerOverflow(convertedValue))
            {
                throw new OverflowException();
            }
            //Decrease start by amount
            return start -= amount;
        }
        public virtual bool CheckIntegerOverflow(long convertedValue)
        {
            return convertedValue > int.MaxValue || convertedValue < int.MinValue;  
        }
    }
}
