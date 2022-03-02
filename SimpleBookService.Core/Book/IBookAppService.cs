using System.Collections.Generic;

namespace SimpleBookService.Core
{
    public interface IBookAppService
    {
        List<Book> GetBooks();
    }
}
