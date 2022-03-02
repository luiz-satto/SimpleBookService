using Microsoft.AspNetCore.Mvc;

namespace SimpleBookService.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        public BooksController()
        {

        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok();
        }
    }
}
