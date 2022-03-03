﻿using Microsoft.AspNetCore.Mvc;
using SimpleBookService.Core;
using System.Threading.Tasks;

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

        [HttpGet("/GetBooks", Name = "GetBooks")]
        public IActionResult GetBooks()
        {
            return Ok(_bookAppService.GetBooks());
        }

        [HttpGet("{id}/GetBook", Name = "GetBook")]
        public IActionResult GetBook(string id)
        {
            var book = _bookAppService.GetBook(id);
            return Ok(book);
        }

        [HttpPost("/Create", Name = "CreateBookAsync")]
        public async Task<IActionResult> CreateBookAsync(Book book)
        {
            var bookId = await _bookAppService.CreateBookAsync(book);
            return CreatedAtRoute("GetBook", new { id = book.Id }, bookId);
        }

        [HttpPut("/Update", Name = "UpdateBookAsync")]
        public async Task<IActionResult> UpdateBookAsync(Book book)
        {
            var bookUpdated = await _bookAppService.UpdateBookAsync(book);
            return Ok(bookUpdated);
        }

        [HttpDelete("{id}/Delete", Name = "DeleteBookAsync")]
        public async Task<IActionResult> DeleteBookAsync(string id)
        {
            await _bookAppService.DeleteBookAsync(id);
            return NoContent();
        }
    }
}
