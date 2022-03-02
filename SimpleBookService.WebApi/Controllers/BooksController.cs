using Microsoft.AspNetCore.Mvc;
using SimpleBookService.Core;

namespace SimpleBookService.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookAppService _bookAppService;
        public BooksController(IBookAppService bookAppService)
        {
            _bookAppService = bookAppService;
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_bookAppService.GetBooks());
        }
    }
}
