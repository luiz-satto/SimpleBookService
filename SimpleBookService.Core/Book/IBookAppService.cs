using System.Collections.Generic;

namespace SimpleBookService.Core.Book
{
    public interface IBookAppService
    {
        List<Book> GetBooks();
    }
}
