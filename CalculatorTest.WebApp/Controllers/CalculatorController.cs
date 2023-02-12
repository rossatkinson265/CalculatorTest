using CalculatorTest.WebService.DTOs;
using CalculatorTest.Logic.Enums;
using CalculatorTest.Logic.Factories;
using CalculatorTest.Logic.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorTest.WebService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private CalculatorFactory _calculatorFactory = new CalculatorFactory();
        [HttpPost]
        public ActionResult<PostCalculatorFeedback> Add([FromBody]PostCalculatorOperation operation)
        {
            PostCalculatorFeedback retVal = new PostCalculatorFeedback();
            try
            {
                ICalculator calc = this.CreateCalculator(CalculatorType.Simple); 
                int newVal = calc.Add(operation.start, operation.amount);
                retVal.Success = true;
                retVal.Feedback = "Success";
                retVal.NewVal = newVal;
                return Ok(retVal);
            }
            catch(Exception ex)
            {
                //Hit a problem so reset to initial value
                retVal.Success = false;
                retVal.Feedback = ex.GetBaseException().Message;
                retVal.NewVal = operation.start;
                return Ok(retVal);
            }
        }

        [HttpPost]
        public ActionResult<PostCalculatorFeedback> Subtract(PostCalculatorOperation operation)
        {
            PostCalculatorFeedback retVal = new PostCalculatorFeedback();
            try
            {
                ICalculator calc = this.CreateCalculator(CalculatorType.Simple); 
                int newVal = calc.Subtract(operation.start, operation.amount);
                retVal.Success = true;
                retVal.Feedback = "Success";
                retVal.NewVal = newVal;
                return Ok(retVal);
            }
            catch(Exception ex)
            {
                //Hit a problem so reset to initial value
                retVal.Success = false;
                retVal.Feedback = ex.GetBaseException().Message;
                retVal.NewVal = operation.start;
                return Ok(retVal);
            }
        }

        [HttpGet]
        public ActionResult<string> Hello()
        {
            return Ok("Hello");
        }

        private ICalculator CreateCalculator(CalculatorType calcType)
        {
            return this._calculatorFactory.CreateCalculator(calcType);
        }
    }
}